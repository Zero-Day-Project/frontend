/**
 * Created by zarges on 14/11/15.
 */
'use strict';

angular.module('ZeroDay.Overview', ['ZeroDay'])

    .config(function ($routeProvider, $injector) {

        $routeProvider

            .when('/overview', {
                templateUrl: 'modules/overview/templates/overview.html',
                controller: 'OverviewController',
                controllerAs: 'overviewCtrl',
                resolve: $injector.get('OverviewControllerResolver'),
                cssClasses: 'overview index',
                animationClasses: {
                    to: [
                        {
                            route: '/overview/virtual-warfare',
                            classes: 'virtual-warfare-enter'
                        }
                    ],
                    from: [
                        {
                            route: '/overview/virtual-warfare',
                            classes: 'virtual-warfare-leave'
                        }
                    ]
                }
            })

            .when('/overview/virtual-warfare', {
                templateUrl: 'modules/overview/templates/virtual_warfare/virtual_warfare.html',
                controller: 'VirtualWarfareController',
                controllerAs: 'virtualWarfareCtrl',
                resolve: $injector.get('VirtualWarfareControllerResolver'),
                cssClasses: 'overview virtual-warfare',
                animationClasses: {
                    to: [
                        {
                            route: '/overview',
                            classes: 'index-enter'
                        }
                    ],
                    from: [
                        {
                            route: '/overview',
                            classes: 'index-leave'
                        }
                    ]
                }
            });

    });

//.animation('.make-full-screen', [function () {
//  return {
//    // make note that other events (like addClass/removeClass)
//    // have different function input parameters
//    enter: function (element, doneFn) {
//      console.log('JAUUU')
//      debugger;
//      // remember to call doneFn so that angular
//      // knows that the animation has concluded
//    },
//
//    leave: function (el, doneFn) {
//      var docHeight = $(document).height(),
//        windowHeight = $(window).height(),
//        scrollTo = docHeight-windowHeight,
//        start = 0;
//
//      debugger;
//      setTimeout(function(){
//        doneFn();
//      },10000);
//      //var scrollTop = function(){
//      //  if(start<scrollTo){
//      //    $(window).scrollTo(start);
//      //    start = start +10;
//      //    console.log(start)
//      //    requestAnimationFrame(scrollTop)
//      //  } else {
//      //    console.log('DONE!');
//      //  }
//      //};
//      //
//      //scrollTop();
//      //jQuery(element).fadeOut(2000,function(){
//      //  console.log('LEAVE DONE');
//      //  doneFn();
//      //});
//
//      //$(window).scrollTo(scrollTo,1000, {
//      //  onAfter: function(){
//      //    console.log('DONE');
//      //  }
//      //});
//    }
//  }
//}]);