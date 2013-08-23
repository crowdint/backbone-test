describe('Views :: Index', function() {
  beforeEach(function(){
    var that = this;

    require(['views/index_view'], function(indexView){
      that.view = new indexView();
      $('#sandbox').html(that.view.render().el);
    });
  });

  afterEach(function(){
    this.view.remove();
  });

  describe('rendering template', function(){
    it('shows Aneurysm link', function(){
      var link = this.view.$el.find('article a');
      expect(link.text()).toEqual('Aneurysm');
    });
  });
});
