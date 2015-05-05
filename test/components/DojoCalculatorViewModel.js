define([
    'components/dojo-calculator-page/DojoCalculatorViewModel',
    'components/dojo-calculator-page/TroopModel',
    'components/dojo-calculator-page/PracticeYardModel',
    'components/dojo-calculator-page/DojoModel'
], function(
    dojoCalc,
    troopModel,
    PracticeYardModel,
    dojoModel
) {

    describe('dojo calculator page', function() {

        var DojoCalcViewModel,
            instance;
            
        beforeEach(function(){
          DojoCalcViewModel = dojoCalc.viewModel;
          instance = new DojoCalcViewModel();
        });

        it("should remove chosenLevel on removeLevel", function(){
            console.log(instance);
            instance.removeLevel();
            expect(instance.chosenLevel()).not.toBe(null);
        });
    });

});
