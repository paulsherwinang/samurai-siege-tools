define(['knockout'], function(ko){
    function DojoModel(dojoData) {
        var self = this;

        self.tiers = dojoData.tiers;
        self.name = dojoData.name;
        self.chosenLevel = ko.observable(dojoData.tiers[0]);
        self.available = ko.computed(function(){
        	return self.chosenLevel().level !== 0;
        });
    }

    return DojoModel;
});