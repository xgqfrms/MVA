"use strict";
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

myExport.getUserId();//123456
myExport.getTypeId();//item
myExport._userId;//undefined
myExport._typeId;//undefined
myExport.converter;//undefined

