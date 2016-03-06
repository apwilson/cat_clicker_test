var catImages = ['cat.jpg', 'cat2.gif', 'cat3.jpg', 'cat4.jpg', 'cat5.jpg', 'cat6.jpg'];
var maxCats = 6;
var currentCat = 0;


$(document).ready(function(e) {
    changeCatsOnClick();
    //addImageToScreenOnClick();
    //followMouseWithImage();
    addImageToScreenOnMouseMove();
});

function changeCatsOnClick() {
  // Change cats on click.
  screen().click(function(clickEvent) {

    // Choose a new cat that will be used by createImage().
    currentCat++;
    if (currentCat >= maxCats) {
      currentCat = 0;
    }
  });
}

function addImageToScreenOnClick() {
  // Add image to screen on click.
  screen().click(function(clickEvent) {
      var $newImg = createImage();
      $newImg.css(createAbsolutePositionCss(clickEvent));
      addToScreen($newImg);
  });
}

function addImageToScreenOnMouseMove() {
  // Add image to screen on click.
  screen().mousemove(function(event) {
      var $newImg = createImage();
      $newImg.css(createAbsolutePositionCss(event));
      addToScreen($newImg);
  });
}

function followMouseWithImage() {
  // Add image to screen, initially hidden.
  var cats = [];
  for(var i = 0; i < maxCats; i++) {
    cats.push(createHiddenImageForCat(i));
  }
  for(var i = 0; i < maxCats; i++) {
    addToScreen(cats[i]);
  }

  // On mouse move follow pointer.
  screen().mousemove(function(mouseMoveEvent) {
    for(var i = 0; i < maxCats; i++) {
      $(cats[i]).hide();
    }
    $(cats[currentCat]).css(createAbsolutePositionCss(mouseMoveEvent));
    $(cats[currentCat]).show();
  });
}

function createImageWithSrc(imgSrc) {
  return $("<img src='" + imgSrc + "' width='496', height='404'/>");
}

function createImage() {
  return createImageWithSrc(catImages[currentCat]);
}

function createHiddenImage() {
  var $newImg = createImage();
  $newImg.hide();
  return $newImg;
}

function createHiddenImageForCat(cat) {
  var $newImg = createImageWithSrc(catImages[cat]);
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
    top: (event.pageY - posY) - 202,
    left: (event.pageX - posX) - 248,
    position:'absolute'
  };
}

function screen() {
  return $('#screen');
}
