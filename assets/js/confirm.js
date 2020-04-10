function Confirm(){
    var Name = name.join();
    var data = {	    
        'name' : Name,
    }
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbwkiFsWuoc6Kk6h67sxFR3kmykn_Y-gQE2QMf-zsszKtorSbrrw/exec",
        data: data,
        dataType: "JSON",
    });
   location.href = "index.html";
}
