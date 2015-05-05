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

          DojoModels = [
            new DojoModel(DojoData),
            new DojoModel(DojoData),
            new DojoModel(DojoData),
            new DojoModel(DojoData),
          ];
          
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
