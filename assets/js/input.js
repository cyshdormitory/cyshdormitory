var cubeName = [];
var element= new Array(0);
var content;
$.ajaxSetup({ cache: false });

document.getElementById("name").onkeypress = function(event){
                if (event.keyCode == 13 || event.which == 13){
                    document.getElementById("name").blur();
                }
            };

function lattice(){
    var value = document.getElementById("name").value;
    var extinct= true;
    var find = false;
    
    for(var i=0;i<element.length;i++){
        if(value==element[i]){
            extinct=false;
        }
    }
    
    if(extinct){
        if(value !== ""){
            for(var i=0;i<content[0].length;i++){
                if(content[0][i] == value){
                    var j=i;
                    find = true;
                    while(content[0][j] == value){
                        cubeName.push(content[1][j]);
                        j++;
                    }
                    break;
                }
            }
      
            if(find){  //create a div
                find=false;
                document.getElementById("buttonArea").style.display = "block";
                $("section").after("<div id="+ "insert" +" class="+"Room"+"></div>");
                var insertDiv = document.getElementById("insert");
                insertDiv.innerHTML = "<header><h1>" + value + "寢人員名單</h1></header>";
                while(cubeName.length){
                    var dc_input = document.createElement("input");
                    dc_input.type = 'button';
                    dc_input.id = value;
                    dc_input.onclick = person;
                    dc_input.value = cubeName.shift();
                    insertDiv.appendChild(dc_input);
                    element.push(value);
                }
            }
        }
    }
}
