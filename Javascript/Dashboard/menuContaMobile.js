function showMenu(menu) {
    var angle = '0deg',
        slide = '300px';

    if (menu) {
        angle = '180deg';
        slide = '0';
    }

    // Slide panel
    $("#menu-painel-mobile").css({
        transform: "translateX(" + slide + ")"
    });

    // Rotate icon
    setTimeout(function () {
        $("#menu-painel-mobile-fechar").css({
            transform: "rotate(" + angle + ")"
        });
    }, 300);

    // Animate menu items
    $(".menu-item-mobile").each(function (i) {
        var row = $(this);
        setTimeout(function () {
            menu && row.addClass('fadeInDown');
            !menu && row.removeClass('fadeInDown');
        }, 100 * i);
    });

}