define(['knockout'], function(ko){
    function DojoModel(dojoData) {
        var self = this;

        self.id = dojoData.id;
        self.tiers = dojoData.tiers;
        self.name = dojoData.name;
        self.chosenLevel = ko.observable(dojoData.tiers[7]); //TODO

        self.available = ko.computed(function(){
        	return self.chosenLevel().level !== 0;
        });

        self.housedTroops = ko.observableArray([]);

        self.getHousedTroopTotalTime = ko.computed(function(){
            if(_.isEmpty(self.housedTroops())) return 0;
            return _.sum(_.pluck(self.housedTroops(), 'training_time'));
        });

        self.getHousedTroopTotalSpace = ko.computed(function(){
            if(_.isEmpty(self.housedTroops())) return;

            return _.sum(_.pluck(self.housedTroops(), 'space'));
        });
    }

    return DojoModel;
});