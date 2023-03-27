function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function aNamedFunction(){
        return `What am I doing?`
    }
}
function returnsAnAnonymousFunction(){
    return function () {
        return `What.`
    }
}