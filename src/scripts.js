/* global $ Trianglify */

function genTriangles() {
  const height = window.innerHeight;
  const width = window.innerWidth;
  const colorFunc = (x, y) => {
    return 'hsl(0,0%,'+Math.floor(Math.abs(x*y*100))+'%)';
  };
  const pattern = Trianglify({
    height,
    width,
    cell_size: 100,
    color_function: colorFunc,
  });
  const image = pattern.png();
  const element = '.jumbotron';
  const css =
    `<style>
      ${element}::after {
        background: url(${image});
      }
    </style>`;
  $('head').append(css);
}
genTriangles();
$(window).resize(function() {
  genTriangles();
});

document.getElementById('history').addEventListener('loadedmetadata', function() {
  // start video about 3 seconds in so transition is faster
  this.currentTime = 3;
}, false);