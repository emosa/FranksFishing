jQuery(document).ready(function($) {
    $(".hw-expand").show();
    setTimeout("$('.hw-expand').slideToggle('slow');", 500);
    $(".hw-info").click(function() {
        $(this).next(".hw-expand").slideToggle("slow").siblings(".hw-expand:visible").slideUp("slow");
        $(this).toggleClass("current");
        $(this).siblings(".hw-info").removeClass("current");
    });
    });
