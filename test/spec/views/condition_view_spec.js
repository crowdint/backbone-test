define(['views/condition_view'], function(ConditionView){
  describe('Views :: Condition', function() {
    var view, model;

    beforeEach(function(){
      model = new Backbone.Model({a: 1});
      view  = new ConditionView({model: model});
    });

    describe('.beforeRender()', function(){
      it('', function(){
        view.beforeRender();
        expect(view.data).toEqual({a: 1});
      });
    });
  });
});

