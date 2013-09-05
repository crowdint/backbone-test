define(['jquery', 'underscore', 'backbone', 'hbs!templates/breadcrumbs'],
       function($, _, Backbone, tmplBreadcrumbs){
        var BreadcrumbsView = Backbone.View.extend({
          initialize: function(options){
            this.data = options;
          },

          template: tmplBreadcrumbs,

          render: function(){
            this.$el.html(this.template(this.data));
            return this;
          }
        });

        return BreadcrumbsView;
       });
