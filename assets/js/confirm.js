function send(name){
        $.ajax({
            url:"record.json",
            data: {
                'name': name
            },
            type:"POST",
            dataType: "text",
        });
}

function Confirm(){
    name.join();
    send(name);
    location.href = "index.html";
}