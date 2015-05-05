define([
    'components/dojo-calculator-page/DojoCalculatorViewModel',
    'components/dojo-calculator-page/TroopModel',
    'components/dojo-calculator-page/PracticeYardModel',
    'components/dojo-calculator-page/DojoModel'
], function(
    dojoCalcVM,
    troopModelVM,
    practiceYardVM,
    dojoModelVM
) {

    describe('dojo calculator page', function() {

        var troopsData,
            dojoData,
            DojoCalcViewModel,
            TroopModelInstances,
            TroopModel,
            DojoModelInstances,
            DojoModel,
            PracticeYardInstances,
            PracticeYardModel,
            DojoCalcInstance;
            
        beforeEach(function(){
            troopsData = [
                {
                    "id": "1",
                    "name": "Troop1",
                    "space": 1,
                    "training_time": 5000,
                    "tiers": [
                        {
                            "level": 1,
                            "training_cost": 90
                        },
                        {
                            "level": 2,
                            "training_cost": 180
                        }
                    ]
                },
                {
                    "id": "2",
                    "name": "Troop2",
                    "space": 4,
                    "training_time": 10000,
                    "tiers": [
                        {
                            "level": 1,
                            "training_cost": 44
                        },
                        {
                            "level": 2,
                            "training_cost": 13
                        }
                    ]
                }
            ]

            dojoData = [
                {
                    id: "1",
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
                            "queueLength": 40,
                            "castleLevel": 2,
                        }
                    ]
                },
                {
                    id: "2",
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
                            "queueLength": 40,
                            "castleLevel": 2,
                        }
                    ]
                },
                {
                    id: "3",
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
                            "queueLength": 40,
                            "castleLevel": 2,
                        }
                    ]
                },
                {
                    id: "4",
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
                            "queueLength": 40,
                            "castleLevel": 2,
                        }
                    ]
                },
            ]

            practiceYardData = {
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
                    }
                ]
            }

            DojoCalcViewModel = dojoCalcVM;
            TroopModel = troopModelVM;
            DojoModel = dojoModelVM;
            PracticeYardModel = practiceYardVM;
            
            TroopModelInstances = [
                new TroopModel(troopsData[0]),
                new TroopModel(troopsData[1])
            ]

            DojoModelInstances = [
                new DojoModel(dojoData[0]),
                new DojoModel(dojoData[1]),
                new DojoModel(dojoData[2]),
                new DojoModel(dojoData[3])
            ]

            PracticeYardInstances = [
                new PracticeYardModel(practiceYardData),
                new PracticeYardModel(practiceYardData)
            ]

            DojoCalcInstance = new DojoCalcViewModel(
                TroopModelInstances,
                DojoModelInstances,
                PracticeYardInstances
            );

        });

        it("should instantiate DojoCalcViewModel with TroopModels", function(){
            expect(getTroop(1).name).toEqual('Troop1');
        });

        it("should instantiate DojoCalcViewModel with DojoModels", function(){
            expect(DojoCalcInstance.dojos[0].name).toEqual('Dojo');
        }); 

        it("should instantiate DojoCalcViewModel with PracticeYardModels", function(){
            expect(DojoCalcInstance.practiceYards[0].name).toEqual('Practice Yard');
        });

        describe('troopModel', function(){
            it('should getTotalCost for one troop type', function(){
                getTroop(1).chosenQuantity(5);
                getTroop(1).chosenLevel(getTroopLevel(1, 1));

                expect(getTroop(1).getTotalCost()).toEqual(450);
            });

            it('should getTotalYardSpace for one troop type', function(){
                getTroop(1).chosenQuantity(5);
                getTroop(1).chosenLevel(getTroopLevel(1, 1));

                expect(getTroop(1).getTotalYardSpace()).toEqual(5);
            });

            it('should getTotalTrainingTime for one troop type', function(){
                getTroop(1).chosenQuantity(5);
                getTroop(1).chosenLevel(getTroopLevel(1, 1));

                expect(getTroop(1).getTotalTrainingTime()).toEqual(25000);
            });

            it('should adjustQuantity and add to quantity of troop', function(){
                getTroop(1).chosenQuantity(5);

                getTroop(1).adjustQuantity(1);

                expect(getTroop(1).chosenQuantity()).toEqual(6);
            });

            it('clearAllTroopQuantity should clear out all troop quantities', function(){
                getTroop(1).chosenQuantity(5);

                DojoCalcInstance.clearAllTroopQuantity();

                expect(getTroop(1).chosenQuantity()).toEqual(0);
                expect(getTroop(1).chosenQuantity()).toEqual(0);
            });

            it('getSpaceConsumed should get all troops space consumed', function(){
                getTroop(1).chosenQuantity(5);
                getTroop(2).chosenQuantity(10);

                expect(DojoCalcInstance.getSpaceConsumed()).toEqual(45);
            });

            it('getGrandTotalCost should get all troops training cost', function(){
                getTroop(1).chosenLevel(getTroopLevel(1, 1));
                getTroop(1).chosenQuantity(1);
                getTroop(2).chosenLevel(getTroopLevel(2, 2));
                getTroop(2).chosenQuantity(1);

                expect(DojoCalcInstance.getGrandTotalCost()).toEqual(103);
            });

            it('should format numbers to have commas per thousands', function() {
                var number = 126789009;
                var expected = "126,789,009"
                var formatted = DojoCalcInstance.formatNumberWithCommas(number);

                expect(formatted).toEqual(expected);
            });
        });

        describe('DojoModel', function(){
            it('getTotalDojoQueueSpace should compute all dojo queue space based on selected level', function(){
                getDojo(1).chosenLevel(getDojoLevel(1));
                getDojo(2).chosenLevel(getDojoLevel(0));

                expect(DojoCalcInstance.getTotalDojoQueueSpace()).toEqual(20);
            });

            it('should mark available === true if dojo chosenLevel is not equal to 0', function(){
                getDojo(1).chosenLevel(getDojoLevel(1));
                getDojo(2).chosenLevel(getDojoLevel(0));

                expect(getDojo(1).available()).toBe(true);
                expect(getDojo(2).available()).toBe(false);
            });

            it('should get all available dojos', function(){
                getDojo(4).chosenLevel(getDojoLevel(1));
                getDojo(2).chosenLevel(getDojoLevel(1));

                expect(DojoCalcInstance.getAvailableDojos().length).toEqual(2);
            });
        });

        describe('PracticeYardModel', function(){
            it('getSpaceAvailable should compute all practice yard space', function(){
                getPracticeYard(1).chosenLevel(getPracticeYardLevel(1));
                getPracticeYard(2).chosenLevel(getPracticeYardLevel(1));

                expect(DojoCalcInstance.getSpaceAvailable()).toEqual(40);
            });
        });

        function getTroop(index) {
            return DojoCalcInstance.troops[index-1];
        }
        
        function getDojo(index) {
            return DojoCalcInstance.dojos[index-1];
        }

        function getPracticeYard(index) {
            return DojoCalcInstance.practiceYards[index-1];
        }

        function getTroopLevel(troopId, level) {
            return DojoCalcInstance.troops[troopId-1].tiers[level-1]
        }

        function getDojoLevel(level) {
            return DojoCalcInstance.dojos[0].tiers[level]
        }

        function getPracticeYardLevel(level) {
            return DojoCalcInstance.practiceYards[0].tiers[level]
        }
    });

});
