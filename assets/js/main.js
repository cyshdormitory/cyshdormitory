const name = [];

function person(data){
    if((data.style.backgroundColor == "")||
       (data.style.backgroundColor == "rgb(240, 255, 255)")){
        
        data.style.backgroundColor = "#6495ed";
        name.push(data.value);
    }
    else if(data.style.backgroundColor == "rgb(100, 149, 237)"){
        data.style.backgroundColor = "#f0ffff";
        
        var Index = name.indexOf(data.value);
        name.splice(Index,1);
    }
}