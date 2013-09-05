define(['views/breadcrumbs_view'], function(BreadcrumbsView){
  describe('Views :: Breadcrumbs', function() {
    var view;

    beforeEach(function(){
      view = new BreadcrumbsView({breadcrumbs: {foo: 'bar'}});
    });

    describe('.render()', function(){
      it('renders the template', function(){
        spyOn(view, 'template');
        view.render();
        expect(view.template).toHaveBeenCalledWith({breadcrumbs: {foo: 'bar'}})
      });

      it('renders each given breadcrumb', function(){
        view.render();
        crumb = view.$el.find('a').first();
        expect(crumb.text()).toEqual('foo');
      });
    });
  });
});
