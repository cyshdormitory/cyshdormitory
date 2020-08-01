var cubeName = [];
var content;
    $.ajaxSetup({ cache: false });
    $.ajax({
        type:'get',
        cache: false,
        url: "https://script.google.com/macros/s/AKfycbyAh4YpHL0elceMbi5wckScuGQpqZOlwL9sJgFv2_-WtKQW3g_B/exec",
        data:  {
            'trigger' : "hello"
        },
        datatype:'json',
        success: function(respond){
                content = respond;
                content = content.split("/n");
                content[0] = content[0].split(",");
                content[1] = content[1].split(",");
                alert("可以開始登錄名單");
            }
    });
function lattice(Room){
    var value = document.check.name.value;
    var find = false;
    if(value !== ""){
        for(var i=0;i<content[0].length;i++){
            if(content[0][i] == document.check.name.value){
                var j=i;
                find = true;
                while(content[0][j] == document.check.name.value){
                    cubeName.push(content[1][j]);
                    j++;
                }
                break;
            }
        }
        if(find){
            document.getElementById("buttonArea").style.display = "block";
            $("section").after("<div id="+"insert"+" class="+"Room"+"></div>");
            var insertDiv = document.getElementById("insert");
            insertDiv.innerHTML = "<header><h1>" + document.check.name.value + "寢人員名單</h1></header>";
            while(cubeName.length){
                var dc_input = document.createElement("input");
                dc_input.type = 'button';
                dc_input.id = value;
                dc_input.onclick = person;
                dc_input.value = cubeName.shift();
                insertDiv.appendChild(dc_input);
            }
        }
    }
}