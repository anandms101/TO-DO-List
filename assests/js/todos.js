$("ul").on("click","li",function(){
    $( this ).toggleClass( "liclicked" );
});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
    if(event.which === 13){
        var newLi = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newLi + "</li>");
    }
});

$(".fa-pencil-alt").on("click",function(){
    $("input[type = 'text']").fadeToggle(200);  
});