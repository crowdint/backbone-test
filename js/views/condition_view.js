define(['jquery', 'underscore', 'backbone', 'views/base_view', 'hbs!templates/condition'],
       function($, _, Backbone, BaseView, tmplCondition){
        var ConditionView = BaseView.extend({
          tmpl: tmplCondition,

          beforeRender: function(){
            this.data = this.model.attributes;
          }
        });

        return ConditionView;
       });
