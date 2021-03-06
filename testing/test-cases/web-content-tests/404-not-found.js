/*jslint browser: true */
/*globals declareTest, info */

declareTest({
    name: "404 - nonexistent page should return a 404 error",
    url: "/doesntexist",
    test: function () {
        "use strict";

        console.log("expected status code: 404");
        console.log("received status code: " + info.status);

        return info.status === 404;
    }
});
