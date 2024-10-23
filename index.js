function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
    return function named(){
        return 1 +1;
    };
}
function returnsAnAnonymousFunction(){
    return function(){
        return 'Hello'
    };
}