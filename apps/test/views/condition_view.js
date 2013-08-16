define(['jquery', 'underscore', 'backbone', 'hbs!test/templates/condition'],
       function($, _, Backbone, tmplCondition){
        var ConditionView = Backbone.View.extend({
          initialize: function(options){
            this.breadcrumb = options.breadcrumb;
            this.listenTo(this.model, "change", this.render);
          },
          render: function(){
            data = this.model.attributes;
            data['breadcrumb'] = this.breadcrumb;
            this.$el.html(tmplCondition(data));
            return this;
          }
        });

        return ConditionView;
       });
