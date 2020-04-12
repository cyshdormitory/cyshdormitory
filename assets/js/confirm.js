function Confirm(){
    var date = new Date();
    var dd = date.getDay();
    var Time = date.getTime();
    Time /= (1000*60);
    Time += 480;
    Time %= 1440;
    
    var openTime = [(1),(22*60+20)];
    var closeTime = [(20*60),(23*60+59)];
  
    if(dd>=1 && dd<=4 && ((Time>=openTime[0] && Time<=closeTime[0])||(Time>=openTime[1] &&  Time<=closeTime[1]))){
        send();
    }
    else if(dd==0 && Time>=openTime[1] && Time<=closeTime[1]){
        send();
    }
    else{
        alert("請不要亂送資料\n現在不是量體溫的時段");
        location.href = "index.html";
    }
}

function send(){
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
