(function() {

    /**
     * doubanApp Module
     *
     * Description
     */
    var doubanApp = angular.module('doubanApp', ['ngRoute','doubanApp.detail', 'doubanApp.listModule' ]);

    //路由  每个模块的路由单独放到子模块中配置
    doubanApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        otherwise({
            redirectTo: '/in_theaters'
        })
    }])

    //定义一个不变的值
    doubanApp.constant('appConfig',{
        listUrl:"https://api.douban.com/v2/movie/",
        detaiUrl:"https://api.douban.com/v2/movie/subject/",
        pageCount:5
    })



})();
