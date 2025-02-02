from flask import Blueprint, send_from_directory

frontendServer = Blueprint("frontend", __name__)


@frontendServer.route("/<path:path>")
def send_report(path):
    # Using request args for path will expose you to directory traversal attacks
    return send_from_directory("frontend/dist", path)


@frontendServer.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers["Cache-Control"] = "public, max-age=0"
    return r
