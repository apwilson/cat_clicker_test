$(document).ready(function(e) {
    $('#screen').click(function(e) {
        var posX = $(this).position().left;
        var posY = $(this).position().top;
        var html = "<img src='cat.jpg' width='124', height='101'/>";
        var $newImg = $(html);
        $newImg.css({top: (e.pageY - posY) -50, left: (e.pageX - posX)-62, position:'absolute'});
        $('#screen').append($newImg);
    });
});
