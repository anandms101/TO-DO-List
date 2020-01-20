$("ul").on("click","li",function(){
    $( this ).toggleClass( "liclicked" );
});

//remove button in action 
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//new entries
$("input[type = 'text']").keypress(function(event){
    if(event.which === 13){
        var newLi = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>X</span> " + newLi + "</li>");
    }
});