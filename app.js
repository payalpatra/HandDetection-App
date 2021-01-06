////  Model Params

const modelParams = {
  flipHorizontal: true, // flip e.g for video
  imageScaleFactor: 0.7, // reduce input image size for gains in speed.
  maxNumBoxes: 20, // maximum number of boxes to detect
  iouThreshold: 0.5, // ioU threshold for non-max suppression
  scoreThreshold: 0.79, // confidence threshold for predictions.
};

///To Access web cam depending on different Browsers

navigator.getUserMedia_ =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia;

/// Select Everything in the html

const video = document.querySelector("#video");
const audio = document.querySelector("#audio");
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("#2d");
let model;

// Detects when everything is Loaded
handTrack.startVideo(video).then((status) => {
  if (status) {
    navigator.getUserMedia(
      { video: {} },
      (stream) => {
        video.srcObject = stream;
        setInterval(runDetection, 1000);
      },
      (err) => console.log(err)
    );
  }
});

/// It detects for the positions of Hand

let runDetection = function () {
  model.detect(video).then((predictions) => {
    console.log(predictions);
    if (predictions.length > 0) {
      audio.play();
    }
  });
};

//Loading the Model
handTrack.load(modelParams).then((lmodel) => {
  model = lmodel;
});
