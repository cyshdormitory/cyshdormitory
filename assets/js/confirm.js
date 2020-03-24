
function send(data){
        $.ajax({
            type: "get",
            url:"https://script.google.com/macros/s/AKfycbzV_wdcUCj0EBf5c7Kd2ayyUlM2D23oP31NjzRiiwijQa6gwlg/exec",
            data: data,
            dataType: "JSON",
        });
}

function Confirm(){
    var data = {
        'name1' : name1,
        'name2' : name2,
        'name3' : name3,
        'name4' : name4
    };
    send(data);
    location.href = "index.html";
}
