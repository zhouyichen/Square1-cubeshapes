(function () {
    var sq1Gen = function (id, height) {
        return new imgGenerator(id, height);
    };

    var imgGenerator = function (id, height) {
        c = document.getElementById(id);
        var ctx = c.getContext("2d");
    };
 
    if(!window.sq1Gen) {
        window.sq1Gen = sq1Gen;
    }
})();