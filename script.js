/* globals angular, console */

// note: extract model data from HTML
// a=[]; $('div.engines div.add').each(function() { var me=$(this); b={name:me.find('h2').html(),tags:me.attr('class'),size:me.find('span').html(),url:me.find('a').attr('href')}; a.push(b) }); JSON.stringify(a);

var app = angular.module('jsTemplates', []);

app.controller('TemplateController', function($scope, $http) {
  
  $scope.templates = [];
  
  // note: $scope.form contains filter
  
  init();
  
  function init() {
    $http.get('templates.json')
      .success(function(tpls) {
        $scope.templates = tpls; // push?
      })
      .error(function(err) {
        console.log("ERROR: "+err);
      });
  }
  
  $scope.update = function() {
    
    angular.forEach($scope.templates, function(template) {
      var toRemove = "";
      angular.forEach($scope.form, function(active,key) {
        var lookfor = key;
        if (typeof(active) === "string") {
          lookfor = active;
        }  
        if (active && template.tags.indexOf(lookfor) === -1) { // not found
          toRemove = "remove";
        }
      });
      
      template.remove = toRemove;
      
    });
  }

});

// show nice link
app.filter('link', function() {
  return function(input) {
    if (input.indexOf('github') > -1) {
      return "github";
    }
    if (input.indexOf('blog') > -1) {
      return "blog post";
    }
    return "project";
  }
});
