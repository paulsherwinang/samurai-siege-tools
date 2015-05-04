// require.js looks for the following global when initializing
var require = {
    baseUrl: ".",
    paths: {
        "bootstrap":            "bower_modules/bootstrap-sass/assets/javascripts/bootstrap.min",
        "validator":            "bower_modules/bootstrap-validator/dist/validator",
        "crossroads":           "bower_modules/crossroads/dist/crossroads.min",
        "hasher":               "bower_modules/hasher/dist/js/hasher.min",
        "jquery":               "bower_modules/jquery/dist/jquery",
        "knockout":             "bower_modules/knockout/dist/knockout",
        "knockout-projections": "bower_modules/knockout-projections/dist/knockout-projections",
        "signals":              "bower_modules/js-signals/dist/signals.min",
        "text":                 "bower_modules/requirejs-text/text",
        "lodash":               "bower_modules/lodash/lodash.min"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        },
        "validator": {
            deps: ["bootstrap"]
        }
    }
};
