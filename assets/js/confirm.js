function Confirm(){
    document.getElementById("buttonArea").style.display="none";
    var date = new Date();
    var dd = date.getDay();
    var Time = date.getTime();
    Time /= (1000*60);
    Time += 480;
    Time %= 1440;
    var openTime = [(18*60+40),(22*60+20)];
    var closeTime = [(20*60),(23*60+30)];
    if(dd>=1 && dd<=5 && ((Time>=openTime[0] && Time<=closeTime[0])||(Time>=openTime[1] &&  Time<=closeTime[1]))){
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
    $.ajaxSetup({ cache: false });
    setTimeout(function(){
        alert("很抱歉　傳送逾時\n請重傳一次");
        document.getElementById("buttonArea").style.display="block";
        freq++;
    },7000);
    if(freq ==4){
        alert("額...Sorry...\n現在伺服器有問題\n把名字記下來去找翁華駿吧...");
        location.href="https://cyshdormitory.github.io/";
    }
    var Name = name.join(",");
    Time %= 10;
    if((Time>5 && freq%2==0) ||(Time<=5 && freq%2==1)){
        $.ajax({
            type:'get',
            cache: false,
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
    else if((Time<=5 && freq%2==0)||(Time>5 && freq%2==1)){
         $.ajax({
            type:'get',
            cache: false,
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
