// 封装

(function(){
    var _userId = 123456;
    var _typeId = "item";
    var myExport = {};//export

    function converter(userId){
        return + usrId;
    }

    myExport.getUserId = function(){
        return converter(_userId);
    }
    myExport.getTypeId = function(){
        return _typeId;
    }
    window.export = myExport;
}());

myExport.getUserId();
myExport.getTypeId();
myExport._userId;
myExport._typeId;
myExport.converter;

