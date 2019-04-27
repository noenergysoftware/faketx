document.getElementById("TencentCaptcha").onclick = function(){
    var module = document.getElementById("TencentCaptcha");
    var attr = module.getAttribute("data-cbfn");
    var callback = eval("window." + attr);
    var res = new Object();
    res.ret = 0;
    res.ticket = 233;
    res.randstr= 233;
    callback(res);
};