<<<<<<< HEAD
const name = [];
const id = [];

function person(data){
    if(name.length<12||data.style.backgroundColor == "rgb(100, 149, 237)"){
        if((data.style.backgroundColor == "")||
            (data.style.backgroundColor == "rgb(240, 255, 255)")){
        
            data.style.backgroundColor = "#6495ed";
            name.push(data.value);
            id.push(data.id);
        }
        else if(data.style.backgroundColor == "rgb(100, 149, 237)"){
            data.style.backgroundColor = "#f0ffff";
        
            var IndexName = name.indexOf(data.value);
            name.splice(IndexName,1);
            var IndexId = id.indexOf(data.value);
            id.splice(IndexId,1);
        }
    }
}
=======
const name = [];

function person(data){
    if(name.length<12||data.style.backgroundColor == "rgb(100, 149, 237)"){
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
}

function Event(){
   var data = {	    
        'name' : "",
    }
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbwkiFsWuoc6Kk6h67sxFR3kmykn_Y-gQE2QMf-zsszKtorSbrrw/exec",
        data: data,
        dataType: "JSON",
    });
}
>>>>>>> 380323b72288db4cd1bdf7434cc1c01f2e056da6
