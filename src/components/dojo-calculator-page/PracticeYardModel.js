define(['knockout'], function(ko){
	function PracticeYardModel(practiceYardData) {
        var self = this;

        self.data = practiceYardData;
        self.chosenLevel = ko.observable();
    }

    return PracticeYardModel;
});