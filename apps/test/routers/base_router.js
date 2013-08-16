define([
       'jquery',
       'underscore',
       'backbone',
       '../views/condition_view',
       '../models/condition_model'
       ],
       function($, _, Backbone, ConditionView, ConditionModel){
         var BaseRouter = Backbone.Router.extend({
            routes: {
              'condition/:condition' : 'condition'
            },

            condition: function(condition) {
              console.log('CONDITION ROUTE:' + condition);
              conditionModel = new ConditionModel();
              conditionView = new ConditionView({
                model: conditionModel,
                el: $('#' + condition)
              });
              conditionModel.fetch()
            }
         });

         var initialize = function(){
          var baseRouter = new BaseRouter();
          Backbone.history.start()
         };

         return { initialize: initialize };

       });
