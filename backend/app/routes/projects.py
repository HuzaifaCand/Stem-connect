from app import db
from app.models import Project, Interest
from flask_login import current_user, login_required
from flask import Blueprint, request, jsonify

bp = Blueprint('projects', __name__)

@bp.route('/projects', methods=['GET'])
def get_projects():
    projects = Project.query.all()

    project_data = [
        {
            'id': project.id,
            'title': project.title,
            'category': project.category,
            'introduction': project.introduction,
            #Do not need other data for projects page
            'creator': project.creator.first_name + ' ' + project.creator.last_name,
            'creationDate': project.creation_date,
            'interestCount': project.interest_count
        }
        for project in projects
    ]

    return jsonify(project_data)

@bp.route('/projects/<int:project_id>', methods=['GET'])
def get_project(project_id):
    project = Project.query.get_or_404(project_id)

    project_data = {
        'id': project.id,
        'title': project.title,
        'category': project.category,
        'introduction': project.introduction,
        'details': project.details,
        'teamSize': project.team_size,
        'skillsRequired': project.skills_required,
        'benefits': project.benefits,
        'creator': project.creator.first_name + ' ' + project.creator.last_name,
        'creationDate': project.creation_date,
        'interestCount': project.interest_count
    }

    return jsonify(project_data)

#verification if user is creator
@bp.route('/projects/<int:project_id>/verify-creator', methods=['GET'])
@login_required
def verify_creator(project_id):
    project = Project.query.get_or_404(project_id)
    if current_user.id == project.creator_id:
        return jsonify({'isCreator': True}), 200
    else:
        return jsonify({'isCreator': False}), 200
    
@bp.route('/recent-projects')
def get_recent_projects():
    projects = Project.query.order_by(Project.creation_date.desc()).limit(3)

    project_data = [
        {
            'id': project.id,
            'title': project.title,
            'category': project.category,
            'introduction': project.introduction,
            'creator': project.creator.first_name + ' ' + project.creator.last_name,
            'creationDate': project.creation_date,
            'interestCount': project.interest_count
        }
        for project in projects
    ]

    return jsonify(project_data)

@bp.route('/create-project', methods=['POST'])
@login_required
def create_project():
    project_data = request.get_json()

    new_project = Project(
        title = project_data['title'],
        category = project_data['category'],
        introduction = project_data['introduction'],
        details = project_data['details'],
        team_size = project_data['teamSize'],
        skills_required = project_data['skillsRequired'],
        benefits = project_data['benefits'],
        creator_id = current_user.id,
    )

    try:
        db.session.add(new_project)
        db.session.commit()
        project_id = new_project.id 
        return jsonify({'createdProjectId': project_id, 'response': "Project Created Successfully!"}), 201
    except Exception as e:
        return jsonify({'error': f"Failed to create project, error: {str(e)}. Please try again"}), 500
    
@bp.route('/delete/<int:project_id>', methods=['DELETE'])
@login_required
def delete_project(project_id):
    project = Project.query.get_or_404(project_id)

    if current_user.id != project.creator_id:
        return jsonify({'error': 'Unauthorized'}), 403

    try:
        db.session.delete(project)
        db.session.commit()
        return jsonify({'response': 'Project deleted successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@bp.route('/update/<int:project_id>', methods=['PUT'])
@login_required
def update_project(project_id):
    project = Project.query.get_or_404(project_id)
    updated_project_data = request.get_json()

    if current_user.id != project.creator_id:
        return jsonify({'error': 'Unauthorized'}), 403
    
    project.title = updated_project_data.get('title', project.title) 
    project.category = updated_project_data.get('category', project.category) 
    project.introduction = updated_project_data.get('introduction', project.introduction) 
    project.details = updated_project_data.get('details', project.details)
    project.team_size = updated_project_data.get('teamSize', project.team_size)
    project.skills_required = updated_project_data.get('skillsRequired', project.skills_required)
    project.benefits = updated_project_data.get('benefits', project.benefits)

    try:
        db.session.commit()
        return jsonify({'response': 'Project updated successfully'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
    
@bp.route('/add-interest/<int:project_id>', methods=['POST'])
@login_required
def add_interest(project_id):
    project = Project.query.get_or_404(project_id)

    if current_user.id == project.creator_id:
        return jsonify({'error': 'You cannot add an interest to your own project'}), 403
    
    if Interest.query.filter_by(project_id=project.id, user_id=current_user.id).first():
        return jsonify({'error': 'You have already added an interest to this project'}), 403
    
    new_interest = Interest(
        project_id = project.id,
        user_id = current_user.id,
    )

    try:
        db.session.add(new_interest)
        project.interest_count += 1
        db.session.commit()
        return jsonify({'response': 'Interest added successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
