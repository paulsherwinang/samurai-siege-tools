var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}



requirejs.config({
    baseUrl: '/base/src',
    paths: {
      "bootstrap":            "bower_modules/bootstrap-sass/assets/javascripts/bootstrap.min",
      "lodash":               "bower_modules/lodash/lodash.min",
      "crossroads":           "bower_modules/crossroads/dist/crossroads.min",
      "hasher":               "bower_modules/hasher/dist/js/hasher.min",
      "jquery":               "bower_modules/jquery/dist/jquery",
      "knockout":             "bower_modules/knockout/dist/knockout",
      "knockout-projections": "bower_modules/knockout-projections/dist/knockout-projections",
      "signals":              "bower_modules/js-signals/dist/signals.min",
      "text":                 "bower_modules/requirejs-text/text",
    },
    shim: {
      "jquery": {
          exports: "$"
      },
      "lodash": {
          exports: "_"
      },
      "bootstrap": {
        deps: ["jquery"]
      },
      "crossroads": {
        deps: ['lodash']
      }
    },
    deps: tests,
    callback: window.__karma__.start
});
