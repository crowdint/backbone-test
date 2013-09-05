define(['models/condition_model'], function(ConditionModel){

  describe('Model :: Condition', function() {
    var condition;

    beforeEach(function(){
      condition = new ConditionModel();
    });

    afterEach(function(){
      condition.destroy();
    });

    describe('.fetch()', function(){
      it('returns data', function(){
        expect(condition.fetch()).not.toBe(null);
        expect(condition.get('name')).toEqual('Aneurysm');
      });

      it('calls a success callback if it is present', function(){
        options = { success: function(){} };
        spyOn(options, 'success');
        condition.fetch(options);
        expect(options.success).toHaveBeenCalled();
      });

      it('return false if set data fails', function(){
        spyOn(condition,'set').andReturn(false)
        expect(condition.fetch()).toBe(false)
      });
    });

    describe('.save()', function(){
      it('calls a success callback if it is present', function(){
        options = { success: function(){} };
        spyOn(options, 'success');
        condition.save(options);
        expect(options.success).toHaveBeenCalled();
      });
    });
  });

});

