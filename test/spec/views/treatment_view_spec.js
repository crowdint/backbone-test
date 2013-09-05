define(['views/treatment_view'], function(TreatmentView){
  describe('Views :: Treatment', function() {
    var view, model;

    beforeEach(function(){
      model = new Backbone.Model();
      model.set('treatments', {foo: 'foo'});
    });

    describe('.beforeRender()', function(){
      describe('When treatment exists', function(){
        beforeEach(function(){
          view = new TreatmentView({model: model, treatment: 'foo'});
        });

        it('sets the provided treatment as data', function(){
          view.beforeRender();
          expect(view.data).toBe('foo');
        });
      });

      describe("When treatment doesn't exists", function(){
        beforeEach(function(){
          view = new TreatmentView({model: model, treatment: 'bar'});
        });

        it('sets an error message as data', function(){
          view.beforeRender();
          expect(view.data).toEqual({ error: "That treatment doesn't exists" });
        });
      });
    });
  });
});
