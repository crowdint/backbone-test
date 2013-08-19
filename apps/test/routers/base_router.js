define([
       'jquery',
       'underscore',
       'backbone',
       '../views/index_view',
       '../views/condition_view',
       '../models/condition_model',
       '../views/treatment_view'
       ],
       function($, _, Backbone, IndexView, ConditionView, ConditionModel, TreatmentView){
         var BaseRouter = Backbone.Router.extend({
            initialize: function(){
              this.breadcrumb = { 'Index' : '#' };
            },

            routes: {
              'condition/:condition/treatment/:treatment' : 'treatment',
              'condition/:condition'                      : 'condition',
              '(/)'                                       : 'index'
            },

            condition: function(condition) {
              conditionModel = new ConditionModel();
              conditionView = new ConditionView({
                model: conditionModel,
                el: $('#pageSection'),
                breadcrumb: this.breadcrumb
              });
              conditionModel.fetch();
            },

            treatment: function(condition, treatment) {
              conditionModel = new ConditionModel();
              breadcrumb = _.clone(this.breadcrumb)
              breadcrumb[condition] = '#condition/' + condition;
              treatmentView = new TreatmentView({
                model: conditionModel,
                el: $('#pageSection'),
                treatment: treatment,
                breadcrumb: breadcrumb
              });
              conditionModel.fetch();
            },

            index: function() {
              indexView = new IndexView({
                el: $('#pageSection')
              });
              indexView.render()
            }
         });

         var initialize = function(){
            var baseRouter = new BaseRouter();
            Backbone.history.start()
         };

         return { initialize: initialize };

       });
