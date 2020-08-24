const name = [];
const id = [];

function showList(){
    document.getElementById("showList").style.display = "block";
    var insertTxt = document.getElementById("list");
    while(name.length){
        $(".listH1").after("<p id=" + "list>" + id.pop() + "&emsp;" + name.pop() + "</p>");
    }
 }

function enterPress(){
    if(event.keyCode==13){
        lattice();
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
