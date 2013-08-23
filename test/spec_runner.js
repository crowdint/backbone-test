require.config({
  baseUrl: '../js',
  urlArgs: 'cb=' + Math.random(),
  paths: {
    jquery: 'lib/jquery',
		underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    Handlebars: 'lib/Handlebars',
    hbs: 'lib/hbs',
    jasmine: '../test/lib/jasmine',
    'jasmine-html': '../test/lib/jasmine-html',
    spec: '../test/spec'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    jasmine: {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    }
  }
});


require(['underscore', 'jquery', 'jasmine-html'], function(_, $, jasmine){

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  var specs = [];

  specs.push('spec/routers/base_router_spec');
  specs.push('spec/models/condition_model_spec');
  specs.push('spec/views/base_view_spec');
  specs.push('spec/views/breadcrumbs_view_spec');
  specs.push('spec/views/condition_view_spec');
  specs.push('spec/views/index_view_spec');
  specs.push('spec/views/treatment_view_spec');

  $(function(){
    require(specs, function(){
      jasmineEnv.execute();
    });
  });

});
