define(['jquery', 'underscore', 'backbone', 'views/breadcrumbs_view'],
       function($, _, Backbone){
        var BaseView = Backbone.View.extend({
          initialize: function(options){
            this.options = options;
            if (this.model) { this.listenTo(this.model, 'change', this.render); }
          },

          data: {},

          render: function(){
            if (typeof(this.beforeRender) === 'function') { this.beforeRender(); }
            this.$el.html(this.tmpl(this.data));
            return this;
          },

          addBreadcrumbs: function(breadcrumbsView){
            breadcrumbsView.render();
          }
        });

        return BaseView;
       });
