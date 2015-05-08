define([
    "jquery",
    "lodash",
    "knockout",
    "text!./DojoCalculatorTemplate.html"
], function(
    $,
    _,
    ko,
    dojoCalcTemplate
){

    function DojoCalcViewModel (TroopModels, DojoModels, PracticeYardModels) {
        var self = this;

        self.dojos = DojoModels;
        self.practiceYards = PracticeYardModels;
        self.troops = TroopModels;

        self.clearAllTroopQuantity = function(){
            _.each(self.troops, function(troop){
                troop.chosenQuantity(0);
            });
        }

        self.getSpaceConsumed = ko.computed(function(){
            return _.map(self.troops, function(troop){
                return troop.getTotalYardSpace();
            }).reduce(addToTotal);
        });

        self.getGrandTotalCost = ko.computed(function(){
            return _.map(self.troops, function(troop){
                return troop.getTotalCost();
            }).reduce(addToTotal);
        });

        self.getTotalDojoQueueSpace = ko.computed(function(){
            var total = 0;

            _.each(self.dojos, function(dojo){
                if(_.isUndefined(dojo.chosenLevel())) return;
                var value = dojo.chosenLevel().queueLength;
                total += value
            })

            return total;
        });

        self.getSpaceAvailable = ko.computed(function(){
            var total = 0

            _.each(self.practiceYards, function(practiceYard){
                if(_.isUndefined(practiceYard.chosenLevel())) return;

                var value = practiceYard.chosenLevel().troopSpace;
                total += value;
            });

            return total;
        });

        self._getAvailableDojos = function() {
            return _.filter(self.dojos, function(dojo){
                return dojo.available();
            });
        }

        self.distributeTroops = function() {
            _.each(self.troops, function(troop){
                troop.chosenQuantity.subscribe(function(newValue){
                    if(_.isEmpty(self._getAvailableDojos())) {
                        return;
                    }

                    var troopObjInHoused = {
                        name: troop.name,
                        id: troop.id,
                        space: troop.space,
                        training_time: troop.training_time
                    }

                    findEligibleDojo(troopObjInHoused);
                });
            });
        }

        self.distributeTroops();

        function findEligibleDojo(troop) {
            var eligibleDojo = _.find(self._getAvailableDojos(), function(availableDojo){
                if(isQualified(availableDojo, troop)) {
                    availableDojo.housedTroops.push(troop);
                };
            });

            console.log(eligibleDojo);
        }

        function isQualified(dojo, troop) {
            var dojoConsumedSpace = _.sum(_.pluck(dojo.housedTroops(), 'space'));
            var housingSpace = dojo.chosenLevel().queueLength;
            var troopSpace = troop.space;
            
            if((dojoConsumedSpace + troopSpace)> housingSpace){
                return false;
            }

            return true;
        }

        function addToTotal(total, n) {
            return total + n;
        }

        self.formatNumberWithCommas = function(num){
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }

    return DojoCalcViewModel;
});