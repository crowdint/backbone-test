require.config({
  paths: {
    jquery: '../lib/jquery',
		underscore: '../lib/underscore',
    backbone: '../lib/backbone',
    Handlebars: '../lib/Handlebars',
    hbs: '../lib/hbs'
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

require(['./js/application'],
        function(AppMain){
          AppMain.initialize();
        });
