define(['jquery', 'underscore', 'backbone', './base_view', 'hbs!test/templates/treatment'],
       function($, _, Backbone, BaseView, tmplTreatment){
        var TreatmentView = BaseView.extend({
          tmpl: tmplTreatment,

          beforeRender: function(){
            var data = this.model.get('treatments')[this.options.treatment] || { error: "That treatment doesn't exists" };
            this.data = data;
          }
        });

        return TreatmentView;
       });
