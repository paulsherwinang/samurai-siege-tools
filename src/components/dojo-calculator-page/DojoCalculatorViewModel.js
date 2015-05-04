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
    dojoCalcTemplate){

    var dojoData = {
        name: "Dojo",
        tiers: [
            {
                "level": 0,
                "queueLength": 0,
                "castleLevel": 0,
            },
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
    }

    var practiceYardData = {
        name: "Practice Yard",
        tiers: [
            {
                "level": 0,
                "troopSpace": 0,
                "castleLevel": 0,
            },
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
    }

    var troopsData = [
        {
            "id": "1",
            "name": "Samurai",
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
            "space": 1,
            "attack_range": "0.4",
            "seconds_per_attack": "0.5",
            "walk_speed": "2",
            "training_time": 30000,
            "tiers": [
                {
                    "level": 1,
                    "dps": 17,
                    "health": 30,
                    "training_cost": 90,
                    "cost_to_upgrade": null,
                    "time_to_upgrade": null,
                    "blacksmith_level": null
                },
                {
                    "level": 2,
                    "dps": 21,
                    "health": 36,
                    "training_cost": 140,
                    "cost_to_upgrade": 180000,
                    "time_to_upgrade": 43200000,
                    "blacksmith_level": 1
                },
                {
                    "level": 3,
                    "dps": 29,
                    "health": 44,
                    "training_cost": 220,
                    "cost_to_upgrade": 900000,
                    "time_to_upgrade": 86400000,
                    "blacksmith_level": 3
                },
                {
                    "level": 4,
                    "dps": 36,
                    "health": 53,
                    "training_cost": 290,
                    "cost_to_upgrade": 2700000,
                    "time_to_upgrade": 259200000,
                    "blacksmith_level": 5
                },
                {
                    "level": 5,
                    "dps": 48,
                    "health": 63,
                    "training_cost": 360,
                    "cost_to_upgrade": 8100000,
                    "time_to_upgrade": 432000000,
                    "blacksmith_level": 6
                },
                {
                    "level": 6,
                    "dps": 58,
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
        {
            "id": "4",
            "name": "Commander",
            "space": 5,
            "attack_range": "0.9",
            "seconds_per_attack": "2",
            "walk_speed": "1",
            "training_time": 120000,
            "tiers": [
                {
                    "level": 1,
                    "health": 360,
                    "dps": 23,
                    "training_cost": 1800,
                    "cost_to_upgrade": null,
                    "time_to_upgrade": null,
                    "blacksmith_level": 2
                },
                {
                    "level": 2,
                    "health": 432,
                    "dps": 30,
                    "training_cost": 2900,
                    "cost_to_upgrade": 360000,
                    "time_to_upgrade": 172800000,
                    "blacksmith_level": 2
                },
                {
                    "level": 3,
                    "health": 516,
                    "dps": 39,
                    "training_cost": 4300,
                    "cost_to_upgrade": 900000,
                    "time_to_upgrade": 259200000,
                    "blacksmith_level": 3
                },
                {
                    "level": 4,
                    "health": 624,
                    "dps": 51,
                    "training_cost": 5800,
                    "cost_to_upgrade": 2700000,
                    "time_to_upgrade": 345600000,
                    "blacksmith_level": 4
                },
                {
                    "level": 5,
                    "health": 744,
                    "dps": 66,
                    "training_cost": 7200,
                    "cost_to_upgrade": 8100000,
                    "time_to_upgrade": 518400000,
                    "blacksmith_level": 5
                }
            ]
        },
        {
            "id": "5",
            "name": "Archer",
            "space": 1,
            "attack_range": "4",
            "seconds_per_attack": "1",
            "walk_speed": "3",
            "training_time": 25000,
            "tiers": [
                {
                    "level": 1,
                    "health": 45,
                    "dps": 11,
                    "training_cost": 180,
                    "cost_to_upgrade": null,
                    "time_to_upgrade": null,
                    "blacksmith_level": null
                },
                {
                    "level": 2,
                    "health": 52,
                    "dps": 14,
                    "training_cost": 290,
                    "cost_to_upgrade": 360000,
                    "time_to_upgrade": 172800000,
                    "blacksmith_level": 2
                },
                {
                    "level": 3,
                    "health": 63,
                    "dps": 18,
                    "training_cost": 480,
                    "cost_to_upgrade": 900000,
                    "time_to_upgrade": 259200000,
                    "blacksmith_level": 4
                },
                {
                    "level": 4,
                    "health": 74,
                    "dps": 24,
                    "training_cost": 640,
                    "cost_to_upgrade": 2700000,
                    "time_to_upgrade": 432000000,
                    "blacksmith_level": 5
                },
                {
                    "level": 5,
                    "health": 90,
                    "dps": 30,
                    "training_cost": 1000,
                    "cost_to_upgrade": 8100000,
                    "time_to_upgrade": 604800000,
                    "blacksmith_level": 6
                }
            ]
        },
        {
            "id": "6",
            "name": "Mongol",
            "space": 2,
            "attack_range": "0.4",
            "seconds_per_attack": "1",
            "walk_speed": "2",
            "training_time": 40000,
            "tiers": [
                {
                    "level": 1,
                    "health": 120,
                    "dps": 30,
                    "training_cost": 500,
                    "cost_to_upgrade": null,
                    "time_to_upgrade": null,
                    "blacksmith_level": null
                },
                {
                    "level": 2,
                    "health": 144,
                    "dps": 39,
                    "training_cost": 1000,
                    "cost_to_upgrade": 700000,
                    "time_to_upgrade": 86400000,
                    "blacksmith_level": 2
                },
                {
                    "level": 3,
                    "health": 172,
                    "dps": 51,
                    "training_cost": 2000,
                    "cost_to_upgrade": 1800000,
                    "time_to_upgrade": 172800000,
                    "blacksmith_level": 3
                },
                {
                    "level": 4,
                    "health": 206,
                    "dps": 66,
                    "training_cost": 4000,
                    "cost_to_upgrade": 7000000,
                    "time_to_upgrade": 432000000,
                    "blacksmith_level": 5
                },
                {
                    "level": 5,
                    "health": 247,
                    "dps": 86,
                    "training_cost": 6000,
                    "cost_to_upgrade": 15300000,
                    "time_to_upgrade": 691200000,
                    "blacksmith_level": 6
                },
                {
                    "level": 6,
                    "health": 280,
                    "dps": 106,
                    "training_cost": 8000,
                    "cost_to_upgrade": 1,
                    "time_to_upgrade": 60000,
                    "blacksmith_level": 7
                }
            ]
        },
        {
            "id": "7",
            "name": "Oni Troll",
            "space": 5,
            "attack_range": "0.9",
            "seconds_per_attack": "2",
            "walk_speed": "1",
            "training_time": 120000,
            "tiers": [
                {
                    "level": 1,
                    "health": 585,
                    "dps": 36,
                    "training_cost": 2900,
                    "cost_to_upgrade": null,
                    "time_to_upgrade": null,
                    "blacksmith_level": null
                },
                {
                    "level": 2,
                    "health": 702,
                    "dps": 63,
                    "training_cost": 4300,
                    "cost_to_upgrade": 540000,
                    "time_to_upgrade": 86400000,
                    "blacksmith_level": 3
                },
                {
                    "level": 3,
                    "health": 839,
                    "dps": 81,
                    "training_cost": 5800,
                    "cost_to_upgrade": 900000,
                    "time_to_upgrade": 259200000,
                    "blacksmith_level": 4
                },
                {
                    "level": 4,
                    "health": 1014,
                    "dps": 104,
                    "training_cost": 8200,
                    "cost_to_upgrade": 2700000,
                    "time_to_upgrade": 432000000,
                    "blacksmith_level": 5
                },
                {
                    "level": 5,
                    "health": 1209,
                    "dps": 135,
                    "training_cost": 10000,
                    "cost_to_upgrade": 8100000,
                    "time_to_upgrade": 691200000,
                    "blacksmith_level": 6
                },
                {
                    "level": 6,
                    "health": 1450,
                    "dps": 194.3,
                    "training_cost": 12000,
                    "cost_to_upgrade": 864000000,
                    "time_to_upgrade": 60000,
                    "blacksmith_level": 6
                }
            ]
        },
        {
            "id": "8",
            "name": "Healer",
            "space": 10,
            "attack_range": "7.5",
            "seconds_per_attack": null,
            "walk_speed": "2",
            "training_time": 1080000,
            "tiers": [
                {
                    "level": 1,
                    "health": 323,
                    "dps": 18.8,
                    "training_cost": 13000,
                    "cost_to_upgrade": null,
                    "time_to_upgrade": null,
                    "blacksmith_level": null
                },
                {
                    "level": 2,
                    "health": 390,
                    "dps": 21.8,
                    "training_cost": 18000,
                    "cost_to_upgrade": 2700000,
                    "time_to_upgrade": 172800000,
                    "blacksmith_level": 2
                },
                {
                    "level": 3,
                    "health": 465,
                    "dps": 26.3,
                    "training_cost": 25000,
                    "cost_to_upgrade": 9000000,
                    "time_to_upgrade": 345600000,
                    "blacksmith_level": 3
                },
                {
                    "level": 4,
                    "health": 536,
                    "dps": 31.5,
                    "training_cost": 30000,
                    "cost_to_upgrade": 15300000,
                    "time_to_upgrade": 518400000,
                    "blacksmith_level": 4
                },
                {
                    "level": 5,
                    "health": 608,
                    "dps": 37.5,
                    "training_cost": 42000,
                    "cost_to_upgrade": 21600000,
                    "time_to_upgrade": 864000000,
                    "blacksmith_level": 5
                }
            ]
        },
    ]


    function DojoCalcViewModel () {
        var self = this;

        self.dojos = [
            new DojoModel(dojoData.tiers),
            new DojoModel(dojoData.tiers),
            new DojoModel(dojoData.tiers),
            new DojoModel(dojoData.tiers),
        ];

        self.practiceYards = [
            new PracticeYardModel(practiceYardData.tiers),
            new PracticeYardModel(practiceYardData.tiers),
            new PracticeYardModel(practiceYardData.tiers),
            new PracticeYardModel(practiceYardData.tiers),
        ];

        self.troops = _.map(troopsData, function(troop){
            return new TroopModel(troop.name, troop);
        });

        self.clearAllQuantity = function(){
            _.each(self.troops, function(troop){
                troop.chosenQuantity(0);
            });
        }

        self.getTotalDojoQueueSpace = ko.computed(function(){
            return _.map(self.dojos, function(dojo){
                if(_.isUndefined(dojo.chosenLevel())) return;
                return dojo.chosenLevel().queueLength;
            }).reduce(addToTotal);
        })

        self.getSpaceConsumed = ko.computed(function(){
            return _.map(self.troops, function(troop){
                return troop.getTotalYardSpace();
            }).reduce(addToTotal);
        });

        self.getSpaceAvailable = ko.computed(function(){
            return _.map(self.practiceYards, function(practiceYard){
                if(_.isUndefined(practiceYard.chosenLevel())) return;
                return practiceYard.chosenLevel().troopSpace;
            }).reduce(addToTotal);
        });

        self.getGrandTotalCost = ko.computed(function(){
            return _.map(self.troops, function(troop){
                return troop.getTotalCost();
            }).reduce(addToTotal);
        });

        function addToTotal(total, n) {
            return total + n;
        }

        self.numberWithCommas = function(num){
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }

    return { viewModel: DojoCalcViewModel, template: dojoCalcTemplate};
});