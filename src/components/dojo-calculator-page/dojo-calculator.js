define([
    "jquery",
    "lodash",
    "knockout",
    "text!./dojo-calculator.html"
], function(
    $,
    _,
    ko,
    dojoCalcTemplate){
    
    var troopsData = [
        {
            "id": "1",
            "name": "Samurai",
            "image": "images/samurai-small.jpg",
            "space": 1,
            "attack_range": "0.4",
            "seconds_per_attack": "1",
            "walk_speed": "2",
            "training_time": 20000,
            "tiers": [
                {
                    "level": 1,
                    "health": 68,
                    "training_cost": 90,
                    "cost_to_upgrade": null,
                    "time_to_upgrade": null,
                    "blacksmith_level": null
                },
                {
                    "level": 2,
                    "health": 81,
                    "training_cost": 140,
                    "cost_to_upgrade": 90000,
                    "time_to_upgrade": 1800000,
                    "blacksmith_level": 1
                },
                {
                    "level": 3,
                    "health": 98,
                    "training_cost": 220,
                    "cost_to_upgrade": 540000,
                    "time_to_upgrade": 86400000,
                    "blacksmith_level": 3
                },
                {
                    "level": 4,
                    "health": 117,
                    "training_cost": 290,
                    "cost_to_upgrade": 1800000,
                    "time_to_upgrade": 259200000,
                    "blacksmith_level": 5
                },
                {
                    "level": 5,
                    "health": 143,
                    "training_cost": 540,
                    "cost_to_upgrade": 5400000,
                    "time_to_upgrade": 432000000,
                    "blacksmith_level": 6
                }
            ]
        },
        {
            "id": "2",
            "name": "Ninja",
            "image": "images/ninja-small.jpg",
            "space": 1,
            "attack_range": "0.4",
            "seconds_per_attack": "0.5",
            "walk_speed": "2",
            "training_time": 30000,
            "tiers": [
                {
                    "level": 1,
                    "health": 30,
                    "training_cost": 90,
                    "cost_to_upgrade": null,
                    "time_to_upgrade": null,
                    "blacksmith_level": null
                },
                {
                    "level": 2,
                    "health": 36,
                    "training_cost": 140,
                    "cost_to_upgrade": 180000,
                    "time_to_upgrade": 43200000,
                    "blacksmith_level": 1
                },
                {
                    "level": 3,
                    "health": 44,
                    "training_cost": 220,
                    "cost_to_upgrade": 900000,
                    "time_to_upgrade": 86400000,
                    "blacksmith_level": 3
                },
                {
                    "level": 4,
                    "health": 53,
                    "training_cost": 290,
                    "cost_to_upgrade": 2700000,
                    "time_to_upgrade": 259200000,
                    "blacksmith_level": 5
                },
                {
                    "level": 5,
                    "health": 63,
                    "training_cost": 360,
                    "cost_to_upgrade": 8100000,
                    "time_to_upgrade": 432000000,
                    "blacksmith_level": 6
                },
                {
                    "level": 6,
                    "health": 72,
                    "training_cost": 440,
                    "cost_to_upgrade": 12000000,
                    "time_to_upgrade": 604800000,
                    "blacksmith_level": 6
                }
            ]
        },
    ]

    function TroopModel(troopData) {
        var self = this;

        self.troop = troopData;

        self.chosenQuantity = ko.observable();
        self.chosenLevel = ko.observable();

        self.getTotalTrainingTime = ko.computed(function(){
            return self.chosenQuantity() * self.troop.training_time;
        });

        self.getTotalCost = ko.computed(function(){
            if(_.isEmpty(self.chosenLevel())) return;
            return self.chosenQuantity() * self.chosenLevel().training_cost;
        });
    }

    function DojoCalcViewModel () {
        var self = this;

        self.troops = _.map(troopsData, function(troop){
            return new TroopModel(troop);
        });
    }

    return { viewModel: DojoCalcViewModel, template: dojoCalcTemplate};
});