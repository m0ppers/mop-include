"use strict";
angular.module("mopInclude", [])
    .directive("mopInclude", ["$interpolate", "$compile", function($interpolate, $compile) {
        return {
            restrict: "EA",
            compile: function(element, attr) {
                var srcExp = attr.mopInclude || attr.src;
                var values = attr.values;
                
                // mop: :S:S:S this is .. well ... broken :S ... what if src includes ' :S
                var template = '<ng-include src="\'{{ src }}\'"></ng-include>';
                var templateFn = $interpolate(template);

                return function($scope, $element, $attrs) {
                    var includeScope = $scope.$new(true);
                    if (typeof values !== "undefined") {
                        $scope.$watch(values, function(evaluatedValues, oldEvaluatedValues) {
                            if (typeof evaluatedValues != "object") {
                                throw new Error("Expected an object but got an "  + typeof evaluatedValues);
                            }
                            if (typeof oldEvaluatedValues == "object") {
                                Object.keys(oldEvaluatedValues).forEach(function(key) {
                                    delete includeScope.key;
                                });
                            }
                            angular.extend(includeScope, evaluatedValues);
                        }, true);
                    }

                    $scope.$watch(srcExp, function(value) {
                        $element.html(templateFn({"src": value}));
                        $compile($element.contents())(includeScope);
                    });
                };
            },
        }
    }]);
