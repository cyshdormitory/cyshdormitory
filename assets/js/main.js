const name = [];
const id = [];
document.getElementById("name").value="";
var loginTime=3;
$.ajaxSetup({ cache: false });
var loginFail= 0;
var input= prompt("請輸入密碼：");
login();

function login(){
    var Url=["https://script.google.com/macros/s/AKfycbzXFVGqD0egrqAgskJSctk32M71tqBgV8kXPO4CWuok6RiiiORUvTB3eQ/exec", "https://script.google.com/macros/s/AKfycbyihTE9D6oz5En9KSU6QKnDLs81IHwA3UagzfUr8Jo7c-vCbjSs/exec"]
    if(input!=null){
        $.ajax({
            type:'get',
            cache: false,
            url: Url[loginFail%2],
            timeout: 5000,
            data:  {
                'trigger' : input
            },
            datatype:'json',
            success: function(respond){
                    if(respond!="fail"){
                        content = respond;
                        content = content.split("/n");
                        content[0] = content[0].split(",");
                        content[1] = content[1].split(",");
                        alert("可開始登錄名單");
                    }
                    else if(loginTime){
                        var msg= "密碼輸入錯誤\n您還剩下" + --loginTime + "次機會";
                        alert(msg);
                        login();
                    }
                    else{
                        alert("很抱歉，您輸入錯誤太多次");
                        location.href= "https://www.cysh.cy.edu.tw/";
                    }
                },
            error: function(){
                loginFail++;
                login();
            }
        });
    }
    else{
        alert("需輸入密碼才能使用本系統");
        login();
    }
}

function showList(){
    document.getElementById("showList").style.display = "block";
    var insertTxt = document.getElementById("list");
    while(name.length){
        $(".listH1").after("<p id=" + "list>" + id.pop() + "&emsp;" + name.pop() + "</p>");
    }
 }

function person(){
    if(name.length<12 || this.style.backgroundColor == "rgb(100, 149, 237)"){
        if((this.style.backgroundColor == "")||
            (this.style.backgroundColor == "rgb(240, 255, 255)")){
        
            this.style.backgroundColor = "#6495ed";
            name.push(this.value);
            id.push(this.id);
        }
        else if(this.style.backgroundColor == "rgb(100, 149, 237)"){
            this.style.backgroundColor = "#f0ffff";
        
            var IndexName = name.indexOf(this.value);
            name.splice(IndexName,1);
            id.splice(IndexName,1);
        }
    }
}
