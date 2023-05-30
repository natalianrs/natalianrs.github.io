// initialize flickity element options customized

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  wrapAround: true, 
  autoPlay: 6000,
  contain: true
});