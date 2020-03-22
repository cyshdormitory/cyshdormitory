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
            url:    
            "https://script.google.com/macros/s/AKfycbwkiFsWuoc6Kk6h67sxFR3kmykn_Y-gQE2QMf-zsszKtorSbrrw/exec",
            data: data,
            dataType: "JSON",
        });
<<<<<<< HEAD
    }
=======
}
>>>>>>> 11bd3a1483350c8c1a40128f8a62935bcb9c43a1
