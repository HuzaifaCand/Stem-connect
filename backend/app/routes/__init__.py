from app.routes.auth import bp as auth_bp
from app.routes.user import bp as dashboard_bp
from app.routes.projects import bp as projects_bp
from app.routes.resources import bp as resources_bp

def register_blueprints(app):
    app.register_blueprint(auth_bp, url_prefix='/api')
    app.register_blueprint(dashboard_bp, url_prefix='/api')
    app.register_blueprint(projects_bp, url_prefix='/api')
    app.register_blueprint(resources_bp, url_prefix='/api')