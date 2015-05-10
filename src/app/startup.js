define([
  'lodash',
  'knockout',
  './router',
  'components/dojo-calculator-page/DojoModel',
  'data/DojoData',
  'components/dojo-calculator-page/PracticeYardModel',
  'data/PracticeYardData',
  'components/dojo-calculator-page/TroopModel',
  'data/TroopsData',
  'components/dojo-calculator-page/DojoCalculatorViewModel'
], function (
  _,
  ko,
  router,
  DojoModel,
  DojoData,
  PracticeYardModel,
  PracticeYardData,
  TroopModel,
  TroopsData,
  DojoCalculatorViewModel
) {

  ko.subscribable.fn.subscribeChanged = function(callback) {
    var previousValue;
    this.subscribe(function(_previousValue) {
        previousValue = _previousValue;
    }, undefined, 'beforeChange');
    this.subscribe(function(latestValue) {
        callback(latestValue, previousValue );
    });
  };


  // Components can be packaged as AMD modules, such as the following:
  ko.components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });
  ko.components.register('home-page', { require: 'components/home-page/home' });

  ko.components.register('dojo-calculator-page', {
      viewModel: {
        createViewModel: function(){
          var TroopModels, PracticeYardModels, DojoModels;

          TroopModels = _.map(TroopsData, function(troopData){
              return new TroopModel(troopData);
          });

          PracticeYardModels = [
              new PracticeYardModel(PracticeYardData),
              new PracticeYardModel(PracticeYardData),
              new PracticeYardModel(PracticeYardData),
              new PracticeYardModel(PracticeYardData)
          ]

          DojoModels = _.map(DojoData, function(dojoData){
            return new DojoModel(dojoData)
          });
          
          return new DojoCalculatorViewModel(TroopModels, DojoModels, PracticeYardModels);
        }
      },
      template: { require: 'text!components/dojo-calculator-page/DojoCalculatorTemplate.html' }
    }
  );

  // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

  // Start the application
  ko.applyBindings({ route: router.currentRoute });
});
