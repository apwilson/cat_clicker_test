$(document).ready(function(e) {
    addImageToScreenOnClick();
    followMouseWithImage();
});


function addImageToScreenOnClick() {
  // Add image to screen on click.
  screen().click(function(clickEvent) {
      var $newImg = createImage();
      $newImg.css(createAbsolutePositionCss(clickEvent));
      addToScreen($newImg);
  });
}

function followMouseWithImage() {
  // Add image to screen, initially hidden.
  var $newImg = createHiddenImage();
  addToScreen($newImg);

  // On mouse move follow pointer.
  screen().mousemove(function(mouseMoveEvent) {
    $newImg.css(createAbsolutePositionCss(mouseMoveEvent));
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

function createAbsolutePositionCss(event) {
  var posX = screen().position().left;
  var posY = screen().position().top;
  return {
    top: (event.pageY - posY) - 50,
    left: (event.pageX - posX) - 62,
    position:'absolute'
  };
}

function screen() {
  return $('#screen');
}
