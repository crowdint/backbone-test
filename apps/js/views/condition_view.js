define(['jquery', 'underscore', 'backbone', './base_view', 'hbs!js/templates/condition'],
       function($, _, Backbone, BaseView, tmplCondition){
        var ConditionView = BaseView.extend({
          tmpl: tmplCondition,

          beforeRender: function(){
            this.data = this.model.attributes;
          }
        });

        return ConditionView;
       });
