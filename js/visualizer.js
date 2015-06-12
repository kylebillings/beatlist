function Visualizer(graphics, analyser) {
    var self = this;
    this.graphics = graphics;
    this.analyser = analyser;
    this.strategies = {
        waveform : {
            name : "Waveform",
            obj : new WaveformVisualizer()
        },
        minimalistic : {
            name : "Minimalistic",
            obj : new MinimalisticVisualizer()
        }
    };

    this.setStrategy = function(key) {
        self.strategy = self.strategies[key].obj;
        self.strategy.initialise(this.graphics, this.analyser);
    }

    this.draw = function() {
        self.strategy.draw(this.graphics, this.analyser);
    }

    // Default to first listed strategy
    this.setStrategy(Object.keys(self.strategies)[0]);
};
