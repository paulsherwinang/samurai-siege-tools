define(['knockout'], function(ko){
    function DojoModel(dojoTiersData) {
        var self = this;

        self.data = dojoTiersData;
        self.chosenLevel = ko.observable();
    }

    return DojoModel;
});