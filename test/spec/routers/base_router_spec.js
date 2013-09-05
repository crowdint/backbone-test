define(['routers/base_router'], function(BaseRouter){
  describe('Router :: Base', function() {
    var router;

    router = BaseRouter.initialize();

    afterEach(function(){
      router.off();
    });

    describe('/condition/:condition', function(){
      it('calls the condition action', function(){
        spyOn(router, 'condition');
        router.navigate('/condition/foo', {trigger: true});
        router.on('all',function(){
          expect(router.condition).toHaveBeenCalled();
        });
      });
    });

    describe('/condition/:condition/treatement/:treatment', function(){
      it('calls the condition action', function(){
        spyOn(router, 'treatment');
        router.navigate('/condition/foo/treatment/bar', {trigger: true});
        router.on('all',function(){
          expect(router.treatment).toHaveBeenCalled();
        });
      });
    });

    describe('/', function(){
      it('calls the index action', function(){
        spyOn(router, 'index');
        router.navigate('/', {trigger: true});
        router.on('all',function(){
          expect(router.index).toHaveBeenCalled();
        });
      });
    });
  });
});
