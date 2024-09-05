from app import db
from app.models import User
from flask import Blueprint, request, jsonify
from flask_login import current_user, login_required

bp = Blueprint('user', __name__)

@bp.route('/dashboard')
@login_required
def dashboard():
    user = current_user

    user_data = {
        'name': user.first_name + ' ' + user.last_name,
        'email': user.email,
        'instagram': user.instagram,
        'bio': user.bio,
        'skills': user.skills,
        'createdProjects': [
            {'id': project.id, 'title': project.title} for project in user.projects
        ],
        'sharedResources': [
            {'id': resource.id, 'title': resource.title} for resource in user.resources
        ],
        'userInterests': [
            {'id': interest.id, 'projectTitle': interest.project.title} for interest in user.interests
        ]
    }

    return jsonify(user_data)
    
    return jsonify({'hasInsta': True}), 200
@bp.route('/update-instagram', methods=['PUT'])
def update_instagram():
    user = current_user
    updated_instagram = request.get_json().get('instagram')

    if User.query.filter_by(instagram=updated_instagram).first():
        return jsonify({'error': 'Instagram account already exists, choose another ID'}), 400
    
    user.instagram = updated_instagram

    try:
        db.session.commit()
        return jsonify({'response': 'Instagram account updated successfully'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
    

@bp.route('/update-bio', methods=['PUT'])
def update_bio():
    user = current_user
    updated_bio = request.get_json().get('bio')
    
    user.bio = updated_bio

    try:
        db.session.commit()
        return jsonify({'response': 'Bio updated successfully'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
    
@bp.route('/update-skills', methods=['PUT'])
def update_skills():
    user = current_user
    updated_skills = request.get_json().get('skills')
    
    user.skills = updated_skills
    
    try:
        db.session.commit()
        return jsonify({'response': 'Skills updated successfully'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

# @bp.route('/change-password', methods=['PUT'])