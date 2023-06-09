jQuery(document).ready(function($) {
    $('body').on('click', '.add-item', function() {
        var element = $(this).closest('.items-list');
        var count = element.find('.item-content').length;

        if(count === 1 && element.find('.item-content').is(':hidden')) {
            element.find('.item-content').show();
            element.closest('.section_data').find('.head_items').show();
        } else {
            $(this).before($(element).find('.item-content:last').clone());
            $(element).find('.item-content:last').find('input').val('');
            var counter = parseInt($(element).find('.item-content:last').find('.number_element').text());

            counter++;
            $(element).find('.item-content:last').find('.number_element').text(counter);
        }
    });

    $("body").on("click",".delete_item",function(){
        var element = $(this).closest('.items-list');
        var count = element.find('.item-content').length;

        if(count === 1) {
            element.closest('.section_data').find('.head_items').hide();
            element.find('.item-content').hide();
            element.find('.item-content').find('input').val('');
            element.find('select option').removeAttr('selected').filter('[value=0]').attr('selected', true);
            element.find('.ss_dib.ss_text').text('No Product');
        } else {
            $(this).closest('.item-content').remove();
        }
    });

    $("body").on("click","a.change-table",function(){
        var table = $(this).data('table');

        $('.change-table').removeClass('active');
        $(this).addClass('active');

        $('.select-table').hide();
        $('#'+table).show();
    });

    (function() {
        $(function() {
            $.tips({
                action: 'click',
                element: '.clicktips',
                preventDefault: false
            });
            return $.tips({
                action: 'hover',
                element: '.hover',
                preventDefault: false,
                html5: false
            });
        });
    }).call(this);
});