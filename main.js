// comment added for js
(function($) {
    var all_list = $('.gallery-block').children('li');
    var all_list_length = $('.gallery-block').children('li').length;
    var ul_width = $('.gallery-block').innerWidth();
    var li_width = ul_width / 6;
    var li_width_posi_top, li_width_posi_left;
    //each function for all list item styling position
    jQuery.each(all_list, function(i) {
        li_width_posi_top = $(this).position().top;
        li_width_posi_left = $(this).position().left;

        $(this).css({
                'width': li_width,
                'margin-top': li_width_posi_top,
                'margin-left': li_width_posi_left
            })
            //after loading postition will add 
        setTimeout(function() {
            all_list.css({
                'position': 'absolute'
            })
        }, 300);
    })

    //onclick list del call
    $('.remove').on('click', function() {
        var kk = $(this).parent('li').nextAll('li');
        //*****i want all li margin left value then i will less li width when deleting any li
        jQuery.each(kk, function(i) {
            var store_each_li_mleft = $(this).css('margin-left');
            var parse_store_each_li_mleft = parseInt(store_each_li_mleft);
            //less than zero checking
            var less_than_zero = parse_store_each_li_mleft <= 0;
            if (less_than_zero) {
                var pre_li_mleft = $(this).prev().css('margin-left');
                var pre_li_mtop = $(this).prev().css('margin-top');
                var parse_pre_li_mleft = parseInt(pre_li_mleft);
                var parse_pre_li_mtop = parseInt(pre_li_mtop);
                var less_than_zero_li = $(this).addClass('target').css({
                    'margin-top': parse_pre_li_mtop,
                    'margin-left': parse_pre_li_mleft
                })
            } else {
                var setitman = (parse_store_each_li_mleft - li_width) - 4;
                $(this).css('margin-left', setitman)
            }
            //less than zero checking end
        })
    })

    var fun_remove_list = function(e) {
            var a = $(this).parent().parent('ul').children('li').not($(this).parent('li'));
            $(this).parent().remove();
            var list_lenght = $('.gallery-block').children('li').length;
            //checking if there is no image then give a no image message
            if (list_lenght === 0) {
                $('.gallery-wrapper').html('<p>There is no image</p>');
            }
        }
        //on click delete images
    $('.remove').on('click', fun_remove_list);

})(jQuery)
