define([
    'components/dojo-calculator-page/DojoCalculatorViewModel'
], function(
    dojoCalc
) {

    describe('dojo calculator page', function() {

        var DojoCalcViewModel,
            instance;
            
        beforeEach(function(){
          DojoCalcViewModel = dojoCalc.viewModel;
          instance = new DojoCalcViewModel();
        });

        it("should remove chosenLevel on removeLevel", function(){
            instance.removeLevel();
            expect(instance.chosenLevel()).not.toBe(null);
        });
    });

});
