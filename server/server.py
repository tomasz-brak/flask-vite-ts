from datetime import datetime
from flask import Blueprint


api = Blueprint("server", __name__, url_prefix="/api")


@api.route("ping")
def test():
    return f"Pong, server time is: {datetime.now().isoformat()}"
