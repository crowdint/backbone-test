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
              this.breadcrumbs = { 'Index' : '#' };
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
                breadcrumbs: this.breadcrumbs
              });
              conditionModel.fetch();
            },

            treatment: function(condition, treatment) {
              conditionModel = new ConditionModel();
              breadcrumbs = _.clone(this.breadcrumbs)
              breadcrumbs[condition] = '#condition/' + condition;
              treatmentView = new TreatmentView({
                model: conditionModel,
                el: $('#pageSection'),
                treatment: treatment,
                breadcrumbs: breadcrumbs
              });
              conditionModel.fetch();
            },

            index: function() {
              indexView = new IndexView({
                el: $('#pageSection'),
                breadcrumbs: {}
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
