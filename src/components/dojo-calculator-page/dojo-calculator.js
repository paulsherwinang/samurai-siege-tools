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
                    "dps": 12,
                    "health": 68,
                    "training_cost": 90,
                    "cost_to_upgrade": null,
                    "time_to_upgrade": null,
                    "blacksmith_level": null
                },
                {
                    "level": 2,
                    "dps": 21,
                    "health": 81,
                    "training_cost": 140,
                    "cost_to_upgrade": 90000,
                    "time_to_upgrade": 1800000,
                    "blacksmith_level": 1
                },
                {
                    "level": 3,
                    "dps": 27,
                    "health": 98,
                    "training_cost": 220,
                    "cost_to_upgrade": 540000,
                    "time_to_upgrade": 86400000,
                    "blacksmith_level": 3
                },
                {
                    "level": 4,
                    "dps": 35,
                    "health": 117,
                    "training_cost": 290,
                    "cost_to_upgrade": 1800000,
                    "time_to_upgrade": 259200000,
                    "blacksmith_level": 5
                },
                {
                    "level": 5,
                    "dps": 45,
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
        {
            "id": "3",
            "name": "Ram",
            "image": "images/ram-small.jpg",
            "space": 5,
            "attack_range": "0.5",
            "seconds_per_attack": "0.1",
            "walk_speed": "3",
            "training_time": 120000,
            "tiers": [
                {
                    "level": 1,
                    "dps": 975,
                    "health": 68,
                    "training_cost": 3600,
                    "cost_to_upgrade": null,
                    "time_to_upgrade": null,
                    "blacksmith_level": null
                },
                {
                    "level": 2,
                    "dps": 1425,
                    "health": 74,
                    "training_cost": 5800,
                    "cost_to_upgrade": 360000,
                    "time_to_upgrade": 86400000,
                    "blacksmith_level": 1
                },
                {
                    "level": 3,
                    "dps": 1950,
                    "health": 82,
                    "training_cost": 8600,
                    "cost_to_upgrade": 900000,
                    "time_to_upgrade": 172800000,
                    "blacksmith_level": 2
                },
                {
                    "level": 4,
                    "dps": 2550,
                    "health": 53,
                    "training_cost": 12000,
                    "cost_to_upgrade": 2700000,
                    "time_to_upgrade": 259200000,
                    "blacksmith_level": 3
                },
                {
                    "level": 5,
                    "dps": 3600,
                    "health": 63,
                    "training_cost": 15000,
                    "cost_to_upgrade": 8100000,
                    "time_to_upgrade": 432000000,
                    "blacksmith_level": 4
                }
            ]
        },
    ]

    var practiceYardData = [
        {
            "level": 1,
            "troopSpace": 20,
            "castleLevel": 1,
        },
        {
            "level": 2,
            "troopSpace": 30,
            "castleLevel": 2,
        },
        {
            "level": 3,
            "troopSpace": 35,
            "castleLevel": 3,
        },
        {
            "level": 4,
            "troopSpace": 40,
            "castleLevel": 4,
        },
        {
            "level": 5,
            "troopSpace": 45,
            "castleLevel": 5,
        },
        {
            "level": 6,
            "troopSpace": 50,
            "castleLevel": 6,
        },
        {
            "level": 7,
            "troopSpace": 55,
            "castleLevel": 9,
        }
    ]

    var dojoData = [
        {
            "level": 1,
            "queueLength": 20,
            "castleLevel": 1,
        },
        {
            "level": 2,
            "queueLength": 25,
            "castleLevel": 1,
        },
        {
            "level": 3,
            "queueLength": 30,
            "castleLevel": 1,
        },
        {
            "level": 4,
            "queueLength": 35,
            "castleLevel": 2,
        },
        {
            "level": 5,
            "queueLength": 40,
            "castleLevel": 3,
        },
        {
            "level": 6,
            "queueLength": 45,
            "castleLevel": 4,
        },
        {
            "level": 7,
            "queueLength": 50,
            "castleLevel": 5,
        },
        {
            "level": 8,
            "queueLength": 55,
            "castleLevel": 6,
        },
        {
            "level": 9,
            "queueLength": 60,
            "castleLevel": 7,
        },
        {
            "level": 10,
            "queueLength": 65,
            "castleLevel": 8,
        }
    ]

    function DojoModel(dojoData) {
        var self = this;

        self.data =  dojoData;
        self.chosenLevel = ko.observable();
    }

    function PracticeYardModel(practiceYardData) {
        var self = this;

        self.data = practiceYardData;
        self.chosenLevel = ko.observable();
    }

    function TroopModel(troopData) {
        var self = this;

        self.troop = troopData;

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

    function DojoCalcViewModel () {
        var self = this;

        self.dojos = [
            new DojoModel(dojoData),
            new DojoModel(dojoData),
            new DojoModel(dojoData),
            new DojoModel(dojoData),
        ];

        self.practiceYards = [
            new PracticeYardModel(practiceYardData),
            new PracticeYardModel(practiceYardData),
            new PracticeYardModel(practiceYardData),
            new PracticeYardModel(practiceYardData),
        ];

        self.troops = _.map(troopsData, function(troop){
            return new TroopModel(troop);
        });

        self.clearAllQuantity = function(){
            _.each(self.troops, function(troop){
                troop.chosenQuantity(0);
            });
        }

        self.getSpaceConsumed = ko.computed(function(){
            return total = _.map(self.troops, function(troop){
                return troop.getTotalYardSpace();
            }).reduce(function(total, n){ return total + n });
        });

        self.getSpaceAvailable = ko.computed(function(){
            return total = _.map(self.practiceYards, function(practiceYard){
                if(_.isUndefined(practiceYard.chosenLevel())) return;
                return practiceYard.chosenLevel().troopSpace;
            }).reduce(function(total, n){ return total + n });
        });

        self.getGrandTotalCost = ko.computed(function(){
            return total = _.map(self.troops, function(troop){
                return troop.getTotalCost();
            }).reduce(function(total, n){ return total + n });
        });

        self.numberWithCommas = function(num){
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }

    return { viewModel: DojoCalcViewModel, template: dojoCalcTemplate};
});