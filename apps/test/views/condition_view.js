define(['jquery', 'underscore', 'backbone', 'hbs!test/templates/condition'],
       function($, _, Backbone, tmplCondition){
        var ConditionView = Backbone.View.extend({
          initialize: function(){
            this.listenTo(this.model, "change", this.render);
          },
          render: function(){
            console.log('UYYIOSAIUYADIUYADSIOUYDA');
            this.$el.html(tmplCondition(this.model.attributes));
            return this;
          }
        });

        return ConditionView;
       });
