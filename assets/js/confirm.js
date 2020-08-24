var freq = 0;
var limitTime = 8000;

function Confirm(){
    document.getElementById("buttonArea").style.display="none";
    var date = new Date();
    var dd = date.getDay();
    var Time = date.getTime();
    Time /= (1000*60);
    Time += 480;
    Time %= 1440;
    send(Time);
}

function send(Time){
    $.ajaxSetup({ cache: false });
    if(freq ==4){
        alert("額...Sorry...\n現在伺服器有問題\n按下確認後會出現名單\n註：記得給舍監執秘看名單");
        showList();
    }
    var Name = name.join(",");
    Time %= 10;
    if((Time>5 && freq%2==0) ||(Time<=5 && freq%2==1)){
        $.ajax({
            type:'get',
            cache: false,
            timeout: limitTime,
            url: "https://script.google.com/macros/s/AKfycbwkiFsWuoc6Kk6h67sxFR3kmykn_Y-gQE2QMf-zsszKtorSbrrw/exec",
            data:  {
                'name' : Name
            },
            datatype:'json',
            success: function(respond){
                if(respond=="成功"){
                    freq =0;
                    name.length=0;
                    var obj= document.getElementsByTagName("div");
                    document.getElementById("name").value = "";
                    for(var j=0;j<obj.length;j++){
                        if(obj[j].getAttribute("id")=="insert"){
                            obj[j].parentNode.removeChild(obj[j]);
                            j-=1;
                        }
                    }
                    alert("可開始登錄名單");
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                alert("很抱歉　傳送逾時\n請重傳一次");
                document.getElementById("buttonArea").style.display="block";
                freq++;
            }
        });
    }
    else if((Time<=5 && freq%2==0)||(Time>5 && freq%2==1)){
         $.ajax({
            type:'get',
            cache: false,
            timeout: limitTime,
            url: "https://script.google.com/macros/s/AKfycbwkiFsWuoc6Kk6h67sxFR3kmykn_Y-gQE2QMf-zsszKtorSbrrw/exec",
            data:  {
                'name' : Name
            },
            datatype:'json',
            success: function(respond){
                if(respond=="成功"){
                    freq =0;
                    name.length=0;
                    var obj= document.getElementsByTagName("div");
                    document.getElementById("name").value = "";
                    for(var j=0;j<obj.length;j++){
                        if(obj[j].getAttribute("id")=="insert"){
                            obj[j].parentNode.removeChild(obj[j]);
                            j-=1;
                        }
                    }
                    alert("可開始登錄名單");
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                alert("很抱歉　傳送逾時\n請重傳一次");
                document.getElementById("buttonArea").style.display="block";
                freq++;
            }
        });
    }
}
