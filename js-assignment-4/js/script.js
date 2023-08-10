document.addEventListener('DOMContentLoaded', function () {
    var videoElement = document.getElementById('camera-stream');

    navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (localMediaStream) {
        videoElement.srcObject = localMediaStream;
    })
    .catch(function (error) {
        console.error('The following error occurred when trying to access the camera: ', error);
    });
});
