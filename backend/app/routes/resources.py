from flask import Blueprint, request, jsonify
from app import db, Resource
from flask_login import current_user, login_required

bp = Blueprint('resources', __name__)

@bp.route('/resources', methods=['GET'])
def get_resources():
    resources = Resource.query.all()

    resource_data = [
        {
            'id': resource.id,
            'title': resource.title,
            'category': resource.category,
            'link': resource.link,
            'sharer': resource.sharer.first_name + ' ' + resource.sharer.last_name
        } for resource in resources
    ]

    return jsonify(resource_data)

@bp.route('/add-resource', methods=['POST'])
@login_required
def add_resource():
    resource_data = request.get_json()

    new_resource = Resource(
        title=resource_data['title'],
        category=resource_data['category'],
        link=resource_data['link'],
        sharer_id = current_user.id
    )

    try:
        db.session.add(new_resource)
        db.session.commit()
        return jsonify({'message': 'Resource added successfully, Thank you for your contribution'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

