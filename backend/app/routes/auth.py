from flask import Blueprint, request
from app.models import User
from app import db
from flask_login import login_user, logout_user, current_user, login_required

bp = Blueprint('auth', __name__)

@bp.route('/register', methods=['POST'])
def register():
    user_data = request.get_json()

    required = ['firstName', 'lastName', 'email', 'password', 'confirmPassword']
    for field in required:
        if field not in user_data:
            return {'error': f'Missing required field: {field}'}, 400
        
    if user_data['password'] != user_data['confirmPassword']:
        return {'error': 'Passwords do not match'}, 400
    
    if User.query.filter_by(email=user_data['email']).first():
        return {'error': 'Email already in use'}, 400
    
    user = User(
        first_name = user_data['firstName'],
        last_name = user_data['lastName'],
        email = user_data['email'],
        instagram = user_data['instagram'],
        bio = user_data['bio'],
        skills = user_data['skills']
    )
    user.set_password(user_data['password'])
    
    try:
        db.session.add(user)
        db.session.commit()
        return {'message': 'You have been successfully registered'}, 201
    except Exception as e:
        return {'error': f"Registration Failed: {str(e)}"}, 500
    
@bp.route('/login', methods=['POST'])
def login():
    user_data = request.get_json()

    user_email = user_data.get('email')
    user_password = user_data.get('password')

    user = User.query.filter_by(email=user_email).first()
    
    if not user or not user.check_password(user_password):
        return {'error': 'Invalid credentials'}, 401
    
    login_user(user)
    return {'message': 'You have been successfully logged in'}, 200

@bp.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return {'message': 'You have been successfully logged out'}, 200
    
@bp.route('/authenticate')
def authenticate():
    if current_user.is_authenticated:
        return {'isAuthenticated': 'You are authenticated'}, 200
    else:
        return {'isAuthenticated': 'You are not authenticated'}, 401