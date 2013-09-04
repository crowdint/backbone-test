var tests = [];

for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/_spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

require.config({
  baseUrl: '/base/src',
  paths: {
    jquery: '/base/lib/jquery',
    underscore: '/base/lib/underscore',
    backbone: '/base/lib/backbone',
    Handlebars: '/base/lib/Handlebars',
    hbs: '/base/lib/hbs'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  },
  hbs: {
    disableI18n: true
  },
  deps: tests,
  callback: window.__karma__.start
});
