define(['lodash', 'knockout'], function(_, ko){
    function TroopModel(name, data) {
        var self = this;

        self.troop = data;
        self.name = name;

        self.chosenQuantity = ko.observable(0);
        self.chosenLevel = ko.observable();

        self.getTotalTrainingTime = ko.computed(function(){
            return self.chosenQuantity() * self.troop.training_time;
        });

        self.getTotalCost = ko.computed(function(){
            if(_.isEmpty(self.chosenLevel())) return;
            return self.chosenQuantity() * self.chosenLevel().training_cost;
        });

        self.getTotalYardSpace = ko.computed(function(){
            return self.chosenQuantity() * self.troop.space;
        });

        self.adjustQuantity = function(num) {
            var currentVal = parseInt(self.chosenQuantity());

            if((currentVal+num) < 0) return;

            self.chosenQuantity(currentVal+num);
        };
    }

    return TroopModel;
});