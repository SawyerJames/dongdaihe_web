;
$(function() {
    // param
    var room = $('.room'),
        number = $('.number'),
        areas = $('.areas'),
        screen = $('.screen');
    var room_content = $('.room-content'),
        number_content = $('.number-content'),
        areas_content = $('.areas-content'),
        screen_content = $('.screen-content'),
        mask = $('.mask'),
        nav_content = $('.nav-content');
    var checkbox = room_content.find(':checkbox'),
        checkbox_screen = screen_content.find(':checkbox'),
        radio = screen_content.find(':radio'),
        numberLi = number_content.find('a'),
        areasLi = areas_content.find('a'),
        resetBtn = $('.reset');
    var circle = $('.circle');
    // API
    function main() {
        toggle(room, room_content);
        toggle(number, number_content);
        toggle(areas, areas_content);
        toggle(screen, screen_content);
        check_list(checkbox);
        radio_list(radio);
        reset_btn();
        li_btn(numberLi);
        li_btn(areasLi);
        circle_animate();
    }
    // function toggle
    function toggle(clickDom, showDom) {
        clickDom.on('click', function() {
            nav_content.children('div').css({ 'display': 'none', "top": '0px' });
            checkbox.prev().removeClass('roomActive');
            radio.prev().removeClass('screenActive');
            numberLi.removeClass('liActive');
            areasLi.removeClass('liActive');
            circle.css('margin-left', '0px');
            showDom.css('display', 'block').animate({ 'top': '77px' }, 200);
            mask.css('display', 'block');
        });
        mask.on('click', function() {
            showDom.css('display', 'none').animate({ 'top': '0px' });
            mask.css('display', 'none');
        });
    }
    // function check_list
    function check_list(checkDom) {
        checkDom.on('click', function() {
            $(this).prev().addClass('roomActive');
        });
    }
    // function radio_list
    function radio_list(radioDom) {
        radioDom.on('click', function() {
            radio.prev().removeClass('screenActive');
            $(this).prev().addClass('screenActive');
        });
    }
    // function areas & number
    function li_btn(liBtn) {
        liBtn.on('click', function() {
            liBtn.removeClass('liActive');
            $(this).addClass('liActive');
        });
    }
    // function reset button
    function reset_btn() {
        resetBtn.on('click', function() {
            checkbox.prev().removeClass('roomActive');
            checkbox.attr('checked', false);
            checkbox_screen.attr('checked', false);
            radio.prev().removeClass('screenActive');
            radio.attr('checked', false);
            circle.css('margin-left', '0px');
        });
    }
    // function animate circle
    function circle_animate() {
        checkbox_screen.on('click', function() {
            if ($(this).prev().children().css('margin-left') == "0px") {
                $(this).prev().children().animate({
                    "marginLeft": "30px"
                }, 100);
            } else {
                $(this).prev().children().animate({
                    "marginLeft": "0px"
                }, 100);
            }
        })
    }
    // main
    main();
});
