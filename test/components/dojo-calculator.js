define(['components/dojo-calculator-page/dojo-calculator'], function(dojoCalc) {

    var DojoCalcViewModel,
        instance;

    describe('dojo calculator page', function() {
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
