function ajax(url, cb) {
    setTimeout(function () {
      cb(null, Math.random());
    }, 2000);
}

function request(url) {
    return new Promise(function(resolve,reject){
        // pass an error-first style callback
        ajax( url, function(err,text){
            if (err) reject( err );
            else resolve( text );
        } );
    } );
}

// run (async) a generator to completion
// Note: simplified approach: no error handling here
function runGenerator(g) {
    var it = g(), ret;

    // asynchronously iterate over generator
    (function iterate(val){
        ret = it.next( val );

        if (!ret.done) {
            // poor man's "is it a promise?" test
            if ("then" in ret.value) {
                // wait on the promise
                ret.value.then( iterate );
            }
            // immediate value: just send right back in
            else {
                // avoid synchronous recursion
                setTimeout( function(){
                    iterate( ret.value );
                }, 0 );
            }
        }
    })();
}

runGenerator(function *app() {
    var response1 = yield request( "http://some.url.com" );
    console.log("Response 1: ", response1);

    var response2 = yield request( "http://other.url.net");
    console.log("Response 2: ", response2);
});
