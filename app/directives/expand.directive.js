"use strict";

function expandOnFocus() {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            $element.on("focus", function() {
                $element.css("transform-origin", "left");
                $element.css("transform", "scale(2, 2)");
            });
            $element.on("blur", function() {
                $element.css("transform", "")
            });  
            console.log($scope);
            console.log($element);
            console.log($attrs);  
        }
    }    
}

angular
    .module("SocialApp")
    .directive("expandOnFocus", expandOnFocus);