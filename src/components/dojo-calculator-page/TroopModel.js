define(['lodash', 'knockout'], function(_, ko){
    ko.extenders.numeric = function(target, precision) {
        var result = ko.pureComputed({
            read: target,  //always return the original observables value
            write: function(newValue) {
                var current = target(),
                    roundingMultiplier = Math.pow(10, precision),
                    newValueAsNum = isNaN(newValue) ? 0 : parseFloat(+newValue),
                    valueToWrite = Math.round(newValueAsNum * roundingMultiplier) / roundingMultiplier;

                //only write if it changed
                if (valueToWrite !== current) {
                    target(valueToWrite);
                } else {
                    //if the rounded value is the same, but a different value was written, force a notification for the current field
                    if (newValue !== current) {
                        target.notifySubscribers(valueToWrite);
                    }
                }
            }
        }).extend({ notify: 'always' });

        //initialize with current value to make sure it is rounded appropriately
        result(target());

        //return the new computed observable
        return result;
    };

    function TroopModel(data) {
        var self = this;

        self.id = data.id;
        self.name = data.name;
        self.space = data.space;
        self.training_time = data.training_time;
        self.tiers = data.tiers;

        self.chosenQuantity = ko.observable(0).extend({ numeric: 0 });

        self.chosenLevel = ko.observable(self.tiers[0]);

        self.getTotalTrainingTime = ko.computed(function(){
            return self.chosenQuantity() * self.training_time;
        });

        self.getTotalCost = ko.computed(function(){
            if(_.isEmpty(self.chosenLevel())) return;
            return self.chosenQuantity() * self.chosenLevel().training_cost;
        });

        self.getTotalYardSpace = ko.computed(function(){
            return self.chosenQuantity() * self.space;
        });

        self.adjustQuantity = function(num) {
            var currentVal = parseInt(self.chosenQuantity());

            if((currentVal+num) < 0) return;

            self.chosenQuantity(currentVal+num);
        };
    }

    return TroopModel;
});