$(".project-toggle").on("hover", function() {
    $(this).css("cursor", "pointer");
});

$(".project-toggle").on("click", function() {
    let clicked = $(this).attr("id");
    $("#" + clicked + "-projects").slideToggle();
    
});


$("project-row").on("hover", function() {
    $(this).toggleClass("project-row");
});

