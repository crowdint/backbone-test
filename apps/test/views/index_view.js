define(['jquery', 'underscore', 'backbone', 'hbs!test/templates/index'],
       function($, _, Backbone, tmplIndex){
        var IndexView = Backbone.View.extend({
          render: function(){
            this.$el.html(tmplIndex());
            return this;
          }
        });

        return IndexView;
       });
