define(['knockout'], function(ko){
	function PracticeYardModel(practiceYardTiersData) {
        var self = this;

        self.data = practiceYardTiersData;
        self.chosenLevel = ko.observable();
    }

    return PracticeYardModel;
});