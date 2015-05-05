define([
    "jquery",
    "lodash",
    "knockout",
    "./PracticeYardModel",
    "./DojoModel",
    "./TroopModel",
    "text!./DojoCalculatorTemplate.html"
], function(
    $,
    _,
    ko,
    PracticeYardModel,
    DojoModel,
    TroopModel,
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
            return _.map(self.dojos, function(dojo){
                if(_.isUndefined(dojo.chosenLevel())) return;
                return dojo.chosenLevel().queueLength;
            }).reduce(addToTotal);
        });

        self.getSpaceAvailable = ko.computed(function(){
            return _.map(self.practiceYards, function(practiceYard){
                if(_.isUndefined(practiceYard.chosenLevel())) return;
                return practiceYard.chosenLevel().troopSpace;
            }).reduce(addToTotal);
        });

        self.distributeTroopToAvailableDojo = function() {
            var availableDojoArray = self.getAvailableDojos();
        }

        self.getAvailableDojos = function() {
            return _.filter(self.dojos, function(dojo){
                return dojo.available();
            });
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