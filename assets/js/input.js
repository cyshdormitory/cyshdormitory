var cubeName = [];
var content;
    $.ajaxSetup({ cache: false });
    $.ajax({
        type:'get',
        cache: false,
        async: false,
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
            }
    });
function lattice(Room){
    var value = document.check.name.value;
    if(value !== ""){
    $("section").after("<div id="+"insert"+" class="+"Room"+"></div>");
        for(var i=0;i<content[0].length;i++){
            if(content[0][i] == document.check.name.value){
                var j=i;
                while(content[0][j] == document.check.name.value){
                    cubeName.push(content[1][j]);
                    j++;
                }
                break;
            }
        }
        document.getElementById("buttonArea").style.display="block";
        var insertDiv = document.getElementById("insert");
        insertDiv.innerHTML = "<header><h1>" + document.check.name.value + "寢人員名單</h1></header>";
        while(cubeName.length){
            var dc_input = document.createElement("input");
            dc_input.type = 'button';
            dc_input.onclick = person;
            dc_input.value = cubeName.pop();
            insertDiv.appendChild(dc_input);
        }
    }
}