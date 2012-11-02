(function () {
    var f = document,
        a = window,
        b = f.createElement("div"),
        c = "dimensions",
        e = function () {
            if (a.innerWidth === undefined) {
                b.innerText = f.documentElement.clientWidth + "x" + f.documentElement.clientHeight;
            } else if (f.all) {
                b.innerText = a.innerWidth + " x " + a.innerHeight;
            } else {
                b.textContent = window.innerWidth + " x " + window.innerHeight;
            }
        };
    f.body.appendChild(b);
    if (typeof b.className !== "undefined") {
        b.className = c;
    } else {
        b.setAttribute("className", c);
    }
    e();
    if (a.addEventListener) {
        a.addEventListener("resize", e, false);
    } else {
        if (a.attachEvent) {
            a.attachEvent("onresize", e);
        } else {
            a.onresize = e;
        }
    }
})();