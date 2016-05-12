describe('HomeService', function() {
    var homeService;

    // TODO: Load the App Module
    beforeEach(function(){
      module('app');
    });

    // TODO: Instantiate the Controller and Mocks
    beforeEach(inject(function(HomeService) {
      homeService = HomeService;
    }));

    describe('- Initialization', function() {
      it('should have 4 items initially', function() {
        var items = homeService.getAll();
        expect(items.length).toBe(4);
      });
    });

    describe('- Get particular item', function() {
      it('should retrieve particular item based on id', function() {
        var item = homeService.get(2);
        expect(item.title).toBe('Hello');
      });
    });

    describe('- Add new item', function() {
      it('should have 5 items after adding new item', function() {
        homeService.add("New","I'm new item");
        expect(homeService.getCount()).toBe(5);
      });
    });

    describe('- Delete existing item', function() {
      it('should delete selected item', function() {
        var item = {
          id:4,
          title:'It is today !!',
          content:'time to go out xD'
        }
        homeService.delete(item);
        expect(homeService.getCount()).toBe(3);

      });
    });

});
