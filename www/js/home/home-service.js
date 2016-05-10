(function () {
  'use strict';

  angular
    .module('home.service',[])
    .factory('HomeService', [function () {
      var items = [
        {
          id:1,
          title:'First note',
          content:'yo..give me five'
        },
        {
          id:2,
          title:'Hello',
          content:'a bright day'
        },
        {
          id:3,
          title:'To be continued',
          content:'Where do we stop?'
        },
        {
          id:4,
          title:'It is today !!',
          content:'time to go out xD'
        }
      ];

      var service = {
        get: function(id){
          return $filter('filter')(items, {id:id})[0];
        },
        getAll: function(){
          return items;
        },
        add: function(title,content){
          var item = {
            id:items.length,
            title:title,
            content:content
          }
          items.push(item);
        },
        delete: function(item){
          var index = items.indexOf(item);
          items.splice(index,1);
        }
      };

      return service;
  }]);

})();
