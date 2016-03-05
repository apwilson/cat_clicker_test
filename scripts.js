$(document).ready(function(e) {
    addImageToScreenOnClick();
    followMouseWithImage();
});


function addImageToScreenOnClick() {
  // Add image to screen on click.
  screen().click(function(e) {
      var $newImg = createImage();
      $newImg.css(createAbsolutePositionCss(e));
      addToScreen($newImg);
  });
}

function followMouseWithImage() {
  // Add image to screen, initially hidden.
  var $newImg = createHiddenImage();
  addToScreen($newImg);

  // On mouse move follow pointer.
  screen().mousemove(function(e) {
    $newImg.css(createAbsolutePositionCss(e));
    $newImg.show();
  });
}

function createImage() {
  return $("<img src='cat.jpg' width='124', height='101'/>");
}

function createHiddenImage() {
  var $newImg = createImage();
  $newImg.hide();
  return $newImg;
}

function addToScreen(objectToAdd) {
  screen().append(objectToAdd);
}

function createAbsolutePositionCss(e) {
  var posX = screen().position().left;
  var posY = screen().position().top;
  return {
    top: (e.pageY - posY) - 50,
    left: (e.pageX - posX) - 62,
    position:'absolute'
  };
}

function screen() {
  return $('#screen');
}
