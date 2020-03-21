var name1;var name2;var name3;var name4;

var freq = [0,0,0,0];

//404
function person4041(data){
    if(freq[0]%2 === 0){
        var change = document.getElementById("person4041");
        change.style.backgroundColor = "#6495ed";
        freq[0] += 1;
        
        name1 = data.value;
    }
    else{
        var change = document.getElementById("person4041");
        change.style.backgroundColor = "#f0ffff";
        freq[0] += 1;
        
        name1 = "";
    }
}

function person4042(data){
    if(freq[1]%2 === 0){
        var change = document.getElementById("person4042");
        change.style.backgroundColor = "#6495ed";
        freq[1] += 1;
        
        name2 = data.value;
    }
    else{
        var change = document.getElementById("person4042");
        change.style.backgroundColor = "#f0ffff";
        freq[1] += 1;
        
        name2 = "";
    }
}
function person4043(data){
    if(freq[2]%2 === 0){
        var change = document.getElementById("person4043");
        change.style.backgroundColor = "#6495ed";
        freq[2] += 1;
        
        name3 = data.value;
    }
    else{
        var change = document.getElementById("person4043");
        change.style.backgroundColor = "#f0ffff";
        freq[2] += 1;
        
        name3 = "";
    }
}
function person4044(data){
    if(freq[3]%2 === 0){
        var change = document.getElementById("person4044");
        change.style.backgroundColor = "#6495ed";
        freq[3] += 1;
        
        name4 = data.value;
    }
    else{
        var change = document.getElementById("person4044");
        change.style.backgroundColor = "#f0ffff";
        freq[3] += 1;
        
        name4 = "";
    }
}

//103
function person1031(data){
    if(freq[0]%2 === 0){
        var change = document.getElementById("person1031");
        change.style.backgroundColor = "#6495ed";
        freq[0] += 1;
        
        name1 = data.value;
    }
    else{
        var change = document.getElementById("person1031");
        change.style.backgroundColor = "#f0ffff";
        freq[0] += 1;
        
        name1 = "";
    }
}

function person1032(data){
    if(freq[1]%2 === 0){
        var change = document.getElementById("person1032");
        change.style.backgroundColor = "#6495ed";
        freq[1] += 1;
        
        name2 = data.value;
    }
    else{
        var change = document.getElementById("person1032");
        change.style.backgroundColor = "#f0ffff";
        freq[1] += 1;
        
        name2 = "";
    }
}
function person1033(data){
    if(freq[2]%2 === 0){
        var change = document.getElementById("person1033");
        change.style.backgroundColor = "#6495ed";
        freq[2] += 1;
        
        name3 = data.value;
    }
    else{
        var change = document.getElementById("person1033");
        change.style.backgroundColor = "#f0ffff";
        freq[2] += 1;
        
        name3 = "";
    }
}
function person1034(data){
    if(freq[3]%2 === 0){
        var change = document.getElementById("person1034");
        change.style.backgroundColor = "#6495ed";
        freq[3] += 1;
        
        name4 = data.value;
    }
    else{
        var change = document.getElementById("person1034");
        change.style.backgroundColor = "#f0ffff";
        freq[3] += 1;
        
        name4 = "";
    }
}

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
     $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbwkiFsWuoc6Kk6h67sxFR3kmykn_Y-gQE2QMf-zsszKtorSbrrw/exec",
        data: data,
        dataType: "JSON",
      });
}
