define(['jquery', 'underscore', 'backbone', 'hbs!test/templates/condition'],
       function($, _, Backbone, tmplCondition){
        var ConditionView = Backbone.View.extend({
          initialize: function(){
            this.listenTo(this.model, "change", this.render);
          },
          render: function(){
            console.log(this.model);
            this.$el.html('Waka');
            return this;
          }
        });

        return ConditionView;
       });
