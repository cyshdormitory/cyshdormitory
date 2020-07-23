const name = [];
const id = [];

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
            var IndexId = id.indexOf(this.value);
            id.splice(IndexId,1);
        }
    }
}
