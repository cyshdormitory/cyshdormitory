function Confirm(){
    var date = new Date();
    var dd = date.getDay();
    var Time = date.getTime();
    Time /= (1000*60);
    Time += 480;
    Time %= 1440;
    var openTime = [(18*60+50),(22*60+20)];
    var closeTime = [(20*60),(23*60+30)];
    if(dd>=1 && dd<=4 && ((Time>=openTime[0] && Time<=closeTime[0])||(Time>=openTime[1] &&  Time<=closeTime[1]))){
        send(Time);
    }
    else if(dd==0 && Time>=openTime[1] && Time<=closeTime[1]){
        send(Time);
    }
    else{
        alert("請不要亂送資料\n現在不是量體溫的時段");
        location.href = "https://cyshdormitory.github.io/";
    }
}

function send(Time){
    var freq = 0;
    var count = setTimeout(function(){
        alert("很抱歉　傳送逾時\n請重傳一次");
        freq++;
    },10000);
    var Name = name.join(",");
    Time %= 10;
    if(Time>5||(Time<=5 && freq%2==1)){
        $.ajax({
            type:'get',
            url: "https://script.google.com/macros/s/AKfycbwkiFsWuoc6Kk6h67sxFR3kmykn_Y-gQE2QMf-zsszKtorSbrrw/exec",
            data:  {
                'name' : Name
            },
            datatype:'json',
            success: function(respond){
                if(respond=="成功"){
                    location.href="https://cyshdormitory.github.io/";
                }
            }
        });
    }
    else{
         $.ajax({
            type:'get',
            url: "https://script.google.com/macros/s/AKfycbyinMzrweJ1EDsVbPdw5mQyJJgeBBDY3O3HCtSroZkFjT2pLkk/exec",
            data:  {
                'name' : Name
            },
            datatype:'json',
            success: function(respond){
                if(respond=="成功"){
                    location.href="https://cyshdormitory.github.io/";
                }
            }
        });
    }
}
