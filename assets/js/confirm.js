function Confirm(){
    var data = {
        'name1' : name1,
        'name2' : name2,
        'name3' : name3,
        'name4' : name4,
    }
    send(data);
    location.href = "index.html";
}

function send(data){
    var random = random();
    if(random===0){
        $.ajax({
            type: "get",
            url:    
            "https://script.google.com/macros/s/AKfycbwkiFsWuoc6Kk6h67s    xFR3kmykn_Y-gQE2QMf-zsszKtorSbrrw/exec",
            data: data,
            dataType: "JSON",
        });
    }
    else if (random===1){
        $.ajax({
            type: "get",
            url:    
            "https://script.google.com/macros/s/AKfycbxnNJwdfJqqs-Nd18O02ldhj1eHwv5QmAFbuYOGYLe6_7ZsKqDQ/exec",
            data: data,
            dataType: "JSON",
        });
    }
    else if (random===2){
        $.ajax({
            type: "get",
            url:    
            "https://script.google.com/macros/s/AKfycbzrbu9zpGlAQNrm0ka19GXNESdL8nLG-AFZ3QkuTnTkPMkHGXve/exec",
            data: data,
            dataType: "JSON",
        });
    }
    else if (random===3){
        $.ajax({
            type: "get",
            url:    
            "https://script.google.com/macros/s/AKfycbw1rI72wkeGXsb19YEr7bZjMzE2Htdo2EDE8kAa75_j0SMUBlw/exec",
            data: data,
            dataType: "JSON",
        });
    }
    else if (random===4){
        $.ajax({
            type: "get",
            url:    
            "https://script.google.com/macros/s/AKfycbzejFJvdOl5F2d7Zw9EImH5qwB12HKnA3UA1G9UFm0_crQPvfHN/exec",
            data: data,
            dataType: "JSON",
        });
    }
    else if (random===5){
        $.ajax({
            type: "get",
            url:    
            "https://script.google.com/macros/s/AKfycbzMbdgV2i8iHKpobGq3O_waVuwvpiFb2EGsA2caSU9GrwnBfHLs/exec",
            data: data,
            dataType: "JSON",
        });
    }
    else if (random===6){
        $.ajax({
            type: "get",
            url:    
            "https://script.google.com/macros/s/AKfycbw1iC3PVbMi44imalh4G-Sei4ezHh907jMynvXw2e-sIkOkhck/exec",
            data: data,
            dataType: "JSON",
        });
    }
    else if (random===7){
        $.ajax({
            type: "get",
            url:    
            "https://script.google.com/macros/s/AKfycbxv5qCSjOnYWWTrDdkst1IRkqqjmvL8YQ5k6-8ekusGh7Zi55M/exec",
            data: data,
            dataType: "JSON",
        });
    }
}
function random(){
    return Math.floor(Math.random()*8);
}