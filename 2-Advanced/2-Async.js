function ajax(url, cb) {
    setTimeout(function () {
      cb(Math.random());
    }, 2000);
}

function request(url) {
    ajax(url, function(result){
      app.next(result);
    });
}

function *app() {
    var response1 = yield request( "http://some.url.com" );
    console.log("Response 1: ", response1);

    var response2 = yield request( "http://other.url.net");
    console.log("Response 2: ", response2);
}

var app = app();
app.next();
