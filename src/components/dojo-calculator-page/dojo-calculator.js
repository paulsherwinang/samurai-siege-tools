define(["jquery", "knockout", "text!./dojo-calculator.html"], function($, ko, dojoCalcTemplate){
    
    function DojoCalcViewModel () {
        this.troops = {
            "id": "1",
            "name": "Samurai",
            "space": 1,
            "attack_range": "0.4",
            "seconds_per_attack": 1,
            "walk_speed": 2,
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
        }
        this.chosenLevel = ko.observable();
    }

    return { viewModel: DojoCalcViewModel, template: dojoCalcTemplate};
});