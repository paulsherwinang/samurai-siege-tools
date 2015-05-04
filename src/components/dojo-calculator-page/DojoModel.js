define(['knockout'], function(ko){
    function DojoModel(dojoData) {
        var self = this;

        self.data = dojoData;
        self.chosenLevel = ko.observable();
    }

    return DojoModel;
});