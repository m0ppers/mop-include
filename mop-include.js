angular.module("mopInclude", [])
    .directive("mopInclude", function() {
        return {
            restrict: "E",
            scope: {
                src: "=",
                values: "="
            },
            template: '<ng-include src="src"></ng-include>'
        }
    });
