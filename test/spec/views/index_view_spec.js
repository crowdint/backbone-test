describe('Views :: Index', function() {
  var view;

  requireDependencies(['views/index_view'], function(indexView){
    view = new indexView();
    $('#sandbox').html(view.render().el);
  });

  afterEach(function(){
    view.remove();
  });

  describe('rendering template', function(){
    it('shows Aneurysm link', function(){
      var link = view.$el.find('article a');
      expect(link.text()).toEqual('Aneurysm');
    });
  });
});
