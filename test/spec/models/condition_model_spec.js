describe('Model :: Condition', function() {
  beforeEach(function(){
    var that = this;

    require(['models/condition_model'], function(ConditionModel){
      that.condition = new ConditionModel();
    });
  });

  afterEach(function(){
    this.condition.destroy();
  });

  describe('.fetch()', function(){
    var condition = this.condition;

    it('returns data', function(){
      expect(condition.fetch()).not.toBe(null);
      expect(condition.get('name')).toEqual('Aneurysm');
    });
  });

});
