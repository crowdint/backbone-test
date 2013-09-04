define(['views/index_view'], function(indexView){

  describe('Views :: Index', function() {
    var view;

    beforeEach(function(){
      view = new indexView();
      view.render()
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

});
