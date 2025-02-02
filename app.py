from flask import Flask

import frontendServer
from server.server import api


app = Flask(__name__)
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0
app.register_blueprint(frontendServer.frontendServer)
app.register_blueprint(api)

app.run(port=5000, debug=True)
