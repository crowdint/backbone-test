define(['views/base_view'], function(BaseView){

  describe('Views :: Base', function() {
    var view;

    beforeEach(function(){
      view = new BaseView();
    });

    describe('Passing a model', function(){
      var model;

      beforeEach(function(){
        model = new Backbone.Model();
        view = new BaseView({ model: model });
        view.tmpl = function(){};
        view.data = { foo: '' };
      });

      afterEach(function(){
        view.stopListening();
        model.off('change')
      });

      it('listen to model change if the model is present', function(){
        spyOn(view,'render');
        model.trigger('change');
        model.on('change', function(){
          expect(view.render).toHaveBeenCalled();
        });
      });
    });

    describe('.render()', function(){
      beforeEach(function(){
        view.beforeRender = function(){};
        view.tmpl = function(){};
        view.data = { foo: '' };
      });

      it('calls a beforeRender hook', function(){
        spyOn(view, 'beforeRender');
        view.render();
        expect(view.beforeRender).toHaveBeenCalled();
      });

      it('renders the template', function(){
        spyOn(view, 'tmpl').andReturn('foo');
        view.render();
        expect(view.tmpl).toHaveBeenCalledWith({ foo: ''});
        expect(view.$el.html()).toBe('foo');
      });

      it('returns the view', function(){
        expect(view.render()).toBe(view);
      });
    });

    describe('.addBreadcrumbs()', function(){
      it('renders the breadcrumbs view', function(){
        var breadcrumbs = jasmine.createSpyObj('breads', ['render']);
        view.addBreadcrumbs(breadcrumbs);
        expect(breadcrumbs.render).toHaveBeenCalled();
      });
    });

  });
});


