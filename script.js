flip = function() {
  var i = document.getElementById('images')
  var oldClass = i.getAttribute('class')
  var classMappings = { 'one': 'two' , 'two': 'three', 'three': 'four', 'four': 'three' }
  var newClass = classMappings[oldClass]
  i.setAttribute('class', newClass)
}
function main() {
  var imgs = document.querySelectorAll('#images img')
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = flip
  }
}

document.body.onload = main
