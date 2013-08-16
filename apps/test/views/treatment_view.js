define(['jquery', 'underscore', 'backbone', 'hbs!test/templates/treatment'],
       function($, _, Backbone, tmplTreatment){
        var TreatmentView = Backbone.View.extend({
          initialize: function(options){
            this.treatment = options.treatment;
            this.breadcrumb = options.breadcrumb;
            this.listenTo(this.model, "change", this.render);
          },
          render: function(){
            data = this.model.get('treatments')[this.treatment] || { error: "That treatment doesn't exists" };
            data['breadcrumb'] = this.breadcrumb;
            this.$el.html(tmplTreatment(data));
            return this;
          }
        });

        return TreatmentView;
       });
