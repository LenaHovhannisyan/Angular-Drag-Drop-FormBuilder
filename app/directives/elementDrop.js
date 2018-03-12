angular.module('elementDrop', []).directive('elementDrop', ['$document', function ($document) {
    return {
        link: function (scope, element, attr) {

            element.on('dragover', function (event) {
                event.preventDefault();
            });

            $('.drop').on('dragenter', function (event) {
                event.preventDefault();
            });
            element.on('drop', function (event) {
                event.stopPropagation();
                var self = $(this);
                scope.$apply(function () {
                    var idx = event.originalEvent.dataTransfer.getData('templateIdx');
                    // var idx1 = event.originalEvent.dataTransfer.getData('templateIdx1');
                    var insertIdx = self.data('index');
                    // var insertIdx1 = self.data('index-6');

                    scope.addElement(scope.dragElements[idx], insertIdx);
                    //  scope.addElement(scope.dragElementsFp[idx], insertIdx);

                });
            });
        }
    };
}]);