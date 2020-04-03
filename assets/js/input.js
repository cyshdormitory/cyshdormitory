var cube = document.getElementById("name");
function lattice(){
    var trigger = document.check.name.value;
        if(trigger !== null){
            var showRoom = document.check.room.value;
            showRoom = "Room" + showRoom;
            document.getElementById(showRoom).style.display="block";
            document.getElementById("buttonArea").style.display="block";
        }
}