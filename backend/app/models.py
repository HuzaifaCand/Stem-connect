from app import db, bcrypt
from flask_login import UserMixin
from datetime import datetime

#User Model
class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    instagram = db.Column(db.String(255), unique=True)
    bio = db.Column(db.Text)
    skills = db.Column(db.Text)
    resources_shared = db.Column(db.Integer, default=0)
    password_hash = db.Column(db.String(128), nullable=False)

    projects = db.relationship('Project', backref='creator', lazy=True)
    resources = db.relationship('Resource', backref='sharer', lazy=True)
    interests = db.relationship('Interest', backref='user', lazy=True)

    @property
    def password(self):
        raise AttributeError('password is not a readable attribute')
    @password.setter
    def password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)
    
    def __repr__(self):
        return f"User: {self.first_name} {self.last_name}"

#Project Model
class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    category = db.Column(db.String(255), nullable=False)
    introduction = db.Column(db.Text, nullable=False)
    details = db.Column(db.Text, nullable=False)
    team_size = db.Column(db.String(12), nullable=False)
    skills_required = db.Column(db.Text, nullable=False)
    benefits = db.Column(db.Text, nullable=False)
    creator_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    interest_count = db.Column(db.Integer, default=0)
    creation_date = db.Column(db.DateTime, default = datetime.now)

    interests = db.relationship('Interest', backref='project', lazy=True)

    def __repr__(self):
        if self.creator:
            return f"{self.creator.first_name} is leading this project: {self.title} which has {self.interest_count} interests"
        else:
            return f"Project: {self.title}"
    
#Interest Model
class Interest(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return f"{self.user.first_name} {self.user.last_name} is interested in {self.project.title}"

#Resource Model
class Resource(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(364), nullable=False)
    category = db.Column(db.String(128), nullable = False)
    link = db.Column(db.Text, nullable=False)
    sharer_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return f"{self.sharer.first_name} {self.sharer.last_name} has shared {self.title}"