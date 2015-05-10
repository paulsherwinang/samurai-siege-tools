define(['knockout'], function(ko){
	function PracticeYardModel(data) {
        var self = this;

        self.name = data.name;
        self.tiers = data.tiers;
        self.chosenLevel = ko.observable(data.tiers[0]);
    }

    return PracticeYardModel;
});