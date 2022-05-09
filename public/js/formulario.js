$(document).ready(() => {
    $("input").focus((event) => {
        // $(event.target).next().css("transition-delay", "0.4s");
        $(event.target).next().css("bottom", "70px");
        $(event.target).next().css("color", "#6246ea");
    });
    
    $("input").focusout((event) => {
        if(($(event.target).val()) == ""){
            $(event.target).next().css("bottom", "35px");
            $(event.target).next().css("color", "rgba(0, 0, 0, 0.6)");
        }
    });
});