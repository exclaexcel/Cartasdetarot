import http.server
import os

PORT = 3000
DIRECTORY = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'public')

class TarotHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

if __name__ == '__main__':
    with http.server.HTTPServer(('', PORT), TarotHandler) as httpd:
        print(f'✨ Cartas de Tarot rodando em http://localhost:{PORT}')
        httpd.serve_forever()
