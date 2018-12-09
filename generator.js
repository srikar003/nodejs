function* generator_names_comp(){
    var names = yield $.getJSON("../data/names.json");
    console.log(names);
    var companies = yield $.getJSON("../data/companies.json");
    console.log(companies);
    var fruits = yield $.getJSON("../data/fruits.json");
    console.log(fruits);
}

function genWrapper(generator){

    var gen=generator();
    function handle_yielded(yielded){
        if(!yielded.done){
            yielded.value.then((data)=>{
                return handle_yielded(gen.next(data));
            })
        }
    }
    return handle_yielded(gen.next());
}

genWrapper(generator_names_comp);