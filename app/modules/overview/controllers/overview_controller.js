/**
 * Created by zarges on 14/11/15.
 */
'use strict';

angular.module('ZeroDay.Overview')
  .controller('OverviewController', function(test) {})

  .constant('OverviewControllerResolver', {
    test: function($q){
      var dfd = $q.defer();
      setTimeout(function(){
        console.log('DONE')
        dfd.resolve();
      },500);
      return dfd.promise;
    }
  });