;
$(function() {
    // variable
    var cancel = $('.o_btn1');
    // 创建取消订单的模板并插入
    var temp = ('<div class="mask"></div>' +
        '<div class="cancelAlert">' +
        '<div class="cancelHeader">' +
        '<span>确认取消该订单</span>' +
        '</div>' +
        '<div class="cancelContent">' +
        '<a href="javascript:void(0)" id="ok">确认</a>' +
        '<a href="javascript:void(0)" id="cancel">取消</a>' +
        '</div>' +
        '</div>');
    $('body').prepend(temp);
    // toggle temp
    function showTemp() {
        cancel.on('click', function(event) {
            event.preventDefault();
            $('.mask').show();
            $('.cancelAlert').show();
        });
    }

    function hideTemp() {
        $('#cancel').on('click', function() {
            $('.mask').hide();
            $('.cancelAlert').hide();
        });
    }
    // API
    function main() {
        showTemp();
        hideTemp();
    }
    main();
});
