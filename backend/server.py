from flask import Flask
from flask_cors import CORS, cross_origin

from faster_whisper import WhisperModel

model_size = "medium"

model = WhisperModel(model_size, device="cpu", compute_type="int8")

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

transcription = []
translation = []

@app.route('/transcribe')
def getTranscription():
    segments, info = model.transcribe("taa2.mp3", beam_size=5)
    for segment in segments:
      print("[%.2fs -> %.2fs] %s" % (segment.start, segment.end, segment.text))
      transcription.append("[%.2fs -> %.2fs] %s" % (segment.start, segment.end, segment.text))
    return {'results': transcription}

@app.route('/translate')
def getTranslation():
   segments, info = model.transcribe("taa2.mp3", beam_size=5, task='translate')
   for segment in segments:
      print("[%.2fs -> %.2fs] %s" % (segment.start, segment.end, segment.text))
      translation.append("[%.2fs -> %.2fs] %s" % (segment.start, segment.end, segment.text))
   return {'results': translation}


if __name__ == '__main__':
    app.run(debug=True, port=4000)