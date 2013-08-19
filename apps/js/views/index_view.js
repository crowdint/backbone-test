define(['jquery', 'underscore', 'backbone', './base_view', 'hbs!js/templates/index'],
       function($, _, Backbone, BaseView, tmplIndex){
        var IndexView = BaseView.extend({
          tmpl: tmplIndex
        });

        return IndexView;
       });
