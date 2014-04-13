function switch() {
  var i = document.getElementById('images')
  var oldClass = i.getAttribute('class')
  var newClass = oldClass == 'on' ? 'off' : 'on'
  i.setAttribute('class', newClass)
}

function apply() {
  var imgs = document.querySelectorAll('#images img')
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = switch
  }
}

document.body.onload = apply
