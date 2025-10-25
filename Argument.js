function max(){
    var m=0;
    for(var i=0;i<arguments.length;i++){
        if (arguments[i]>m){
            m=arguments[i]
        }
    }
    return m;
}
document.getElementById("result").innerHTML=max(44,755,8372,8127,129,192736)