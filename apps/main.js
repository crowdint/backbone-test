require.config({
  paths: {
    jquery: '../lib/jquery',
		underscore: '../lib/underscore',
    backbone: '../lib/backbone',
    Handlebars: '../lib/Handlebars',
    hbs: '../lib/hbs'
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

require(['./test/application'],
        function(AppMain){
          AppMain.initialize();
        });
