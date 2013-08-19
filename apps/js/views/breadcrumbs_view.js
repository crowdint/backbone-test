define(['jquery', 'underscore', 'backbone', 'hbs!js/templates/breadcrumbs'],
       function($, _, Backbone, tmplBreadcrumbs){
        var BreadcrumbsView = Backbone.View.extend({
          initialize: function(options){
            this.data = options;
          },

          render: function(){
            this.$el.html(tmplBreadcrumbs(this.data));
            return this;
          }
        });

        return BreadcrumbsView;
       });
