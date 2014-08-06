(function(){
	var app = angular.module('playlist', []);

	app.controller('PlaylistController', function(){
		this.tracks = tracks;
	});

	app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });

	var tracks = [{title:"Taking You with Me - Alizzz Remix - Bonus Track",artist:"Kid Astray",album:"Taking You with Me EP"},{title:"Learn to Fly (feat. Jordan Rakei)",artist:"FKJJordan Rakei",album:"Take Off - EP"},{title:"Seven Eleven",artist:"20sylIbrahim Maalouf",album:"Motifs"},{title:"It's You",artist:"Duck Sauce",album:"It's You"},{title:"Bill Bro Baggins",artist:"Opiuo",album:"Butternut Slap - Part 1"},{title:"You Don't Understand",artist:"Gramatik",album:"You Don't Understand"},{title:"Callisto",artist:"Brillz & ETC!ETC!BrillzETC!ETC!",album:"TWONK"},{title:"B-Boy Portrait in Spain",artist:"Dr Who Dat?",album:"Beat Journey"},{title:"We Love Life",artist:"Biga RanxChill Bump",album:"On Time (Remix)"},{title:"Definition",artist:"Black Star",album:"Mos Def & Talib Kweli Are Black Star"},{title:"Certified Air Raid Material",artist:"Edit",album:"Certified Air Raid Material"},{title:"Grapesicles (Samiyam Remix)",artist:"Flying Lotus",album:"L.A. EP 2 X 3"},{title:"Music makes you lose control",artist:"Les Rythmes Digitales",album:"Darkdancer"}];

})();
