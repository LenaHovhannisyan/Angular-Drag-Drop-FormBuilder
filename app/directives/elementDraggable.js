angular.module('elementDraggable', []).directive('elementDraggable', ['$document', function ($document) {
    return {
        link: function (scope, element, attr) {
            element.on('dragstart', function (event) {

                event.originalEvent.dataTransfer.setData('templateIdx', $(element).data('index'));
                //event.originalEvent.dataTransfer.setData('templateIdx1', $(element).data('index-6'));
            });
        }
    };
}]);