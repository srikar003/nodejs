function fun_name(){
console.log("hello world");
}
fun_name();

var var_func_name =function(){
    console.log("bye world");
}
var_func_name();

function callfun(fun){
    fun();
}
callfun(var_func_name);