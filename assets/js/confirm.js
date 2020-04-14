function Confirm(){
    var date = new Date();
    var dd = date.getDay();
    var Time = date.getTime();
    Time /= (1000*60);
    Time += 480;
    Time %= 1440;
    
    var openTime = [(17*60+20),(22*60+20)];
    var closeTime = [(20*60),(23*60+59)];
  
    if(dd>=1 && dd<=4 && ((Time>=openTime[0] && Time<=closeTime[0])||(Time>=openTime[1] &&  Time<=closeTime[1]))){
        send(Time);
    }
    else if(dd==0 && Time>=openTime[1] && Time<=closeTime[1]){
        send(Time);
    }
    else{
        alert("請不要亂送資料\n現在不是量體溫的時段");
        location.href = "index.html";
    }
}

function send(Time){
    var Name = name.join();
    var data = {	    
        'name' : Name,
    }
    Time/=144;
    if(Time>5){
        $.ajax({
            type: "get",
            url: "https://script.google.com/macros/s/AKfycbwkiFsWuoc6Kk6h67sxFR3kmykn_Y-gQE2QMf-zsszKtorSbrrw/exec",
            data: data,
            dataType: "JSON",
         });
    }
    else{
         $.ajax({
            type: "get",
            url: "https://script.google.com/macros/s/AKfycbw_KbxlDcGWJBm6VRrea7hLVchSSkYFEgqZi1Fl/exec",
            data: data,
            dataType: "JSON",
         });
    }
    location.href = "index.html";
}
