(function lazyImages () {

  window.addEventListener('DOMContentLoaded', function () {
    var lazyImages = document.querySelectorAll('img.lazy')
    lazyImages.forEach(function (image) {
      var success = setSrcsetFromDataAttr(image)
      if (!success) console.warn('Image has lazy class but lacks data-srcset.')
    })
  })

  function setSrcsetFromDataAttr (element) {
    var srcsetFromData = element.dataset.srcset
    if (srcsetFromData === undefined) return false
    element.setAttribute('srcset', srcsetFromData)
    return true
  }

})()