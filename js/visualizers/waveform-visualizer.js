function WaveformVisualizer() {
    var self = this;

    var bufferLength = null;
    var streamData = null;
    var width = null;
    var height = null;
    var gridWidth = null;
    var gridHeight = null;

    (function() {
    var canvas = document.getElementById('canvas'),
            context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            /**
             * Your drawings need to be inside this function otherwise they will be reset when 
             * you resize the browser window and the canvas goes will be cleared.
             */
            drawStuff(); 
    }
    resizeCanvas();

    function drawStuff() {
        // Calculate and initialise values used when drawing audio data
    this.initialise = function(graphics, analyser) {
        analyser.fftSize = 2048;
        bufferLength = analyser.frequencyBinCount;
        streamData = new Uint8Array(bufferLength);

        width = graphics.canvas.width;
        height = graphics.canvas.height;
        gridWidth = width / bufferLength;
        gridHeight = height / analyser.fftSize * 2;

        graphics.strokeStyle = "#7D8CFE";
    }

    // Draw audio data
    this.draw = function(graphics, analyser) {
        analyser.getByteTimeDomainData(streamData);
        graphics.clearRect(0, 0, width, height);
        graphics.beginPath();

        for (var i = 0; i < bufferLength; i++) {
            var x = i * gridWidth;
            // Calculate y coordinate with respect to y and
            // shift it closer to the center of the page
            var y = gridHeight * streamData[i];
            y += height * 0.25;

            if (i == 0) {
                graphics.moveTo(x, y);
            }
            else {
                graphics.lineTo(x, y);
            }
        }

        graphics.stroke();
        graphics.closePath();
    }
    }
})();
}
