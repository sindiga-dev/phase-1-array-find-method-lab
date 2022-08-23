function superbowlWin(record){
    let object=record.find(function(object){
        return object.result==='W';
    });
    if (typeof object === 'undefined'){
        return undefined;
    }
    else{
        return object.year;
    }
}