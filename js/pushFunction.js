$(function(){
    // variable
    var roomStarBtn = $('input:radio[name="roomStar"]'),
        serveStarBtn = $('input:radio[name="serveStar"]');
    var RoomStarLength = $('#roomStar').find('.star').length,
        RoomStar = $('#roomStar').find('.star'),
        RoomStarBox = [];
    var ServeStarLength = $('#serveStar').find('.star').length,
        ServeStar = $('#serveStar').find('.star'),
        ServeStarBox = [];
    // 获取星星总个数放入数组 
    for(i = 0;i<RoomStarLength;i++){
        RoomStarBox.push(RoomStar[i]);
    }
    for(j = 0;j<RoomStarLength;j++){
        ServeStarBox.push(ServeStar[j]);
    }
    // API 
    function main () {
        starShow(roomStarBtn,RoomStarBox);
        starShow(serveStarBtn,ServeStarBox);
    }
    // starShow mixin
    function starShow (btnDom,starBox) {
        var par;
        btnDom.on('click',function(par){
            //移除所有饱和星星
            for(i=0;i<5;i++){
                $(starBox[i]).removeClass('starL');
            }
            //获取当前input的val 
            par = $(this).val();
            //判断val值给星星加类
            if (par == 1) {
                $(starBox[0]).addClass('starL');
            }
            else if (par == 2) {
                for(i=0;i<2;i++){
                    $(starBox[i]).addClass('starL');
                }
            }
            else if (par == 3) {
                for(i=0;i<3;i++){
                    $(starBox[i]).addClass('starL');
                }
            }
            else if (par == 4) {
                for(i=0;i<4;i++){
                    $(starBox[i]).addClass('starL');
                }
            }
            else if (par == 5) {
                for(i=0;i<5;i++){
                    $(starBox[i]).addClass('starL');
                }
            }
        })
    }
    // entry function
    main();
})