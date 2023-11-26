$(".add-book").on('click', () => {
    $(".popup-overlay").css("display", 'flex');
});

$("#close-popup").on('click', () => {
    $(".popup-overlay").css("display", 'none');

    $("#naslov").val("")
    $("#avtor").val("")
    $("#komentar").val("")
});



$("#submit-book").on('click', () => {

    let naslov = $("#naslov").val()
    let avtor = $("#avtor").val()
    let komentar = $("#komentar").val()
    
    if(naslov.length == 0 || avtor.length == 0 || komentar.length == 0) {
        alert("all fields are needed");
    } else {
        $(".popup-overlay").css("display", 'none');

        $("#naslov").val("")
        $("#avtor").val("")
        $("#komentar").val("")
        
        $("#container").append(`
            <div class='card'>
                <div>Naslov: ${naslov}</div>
                <div>Avtor: ${avtor}</div>
                <div>Komentar: ${komentar}</div>
            </div>
        `);
    }
});