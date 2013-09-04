describe('Model :: Condition', function() {
  var condition;

  requireDependencies(['models/condition_model'], function(ConditionModel){
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
  });

});
