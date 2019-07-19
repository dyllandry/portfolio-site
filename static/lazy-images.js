;(function lazyImages () {

  /**
   * Set srcset attributes on images so browser can pick appropriate size for
   * device screen size. Conduct on load event so placeholder images have a
   * chance to appear on the page. Conducting on DOMContentLoaded will replace
   * the placeholder images before they have a chance to appear and cause a
   * content reflow.
   */
  window.addEventListener('load', function () {
    var lazyImages = document.querySelectorAll('img.lazy')
    lazyImages.forEach(function (image) {
      var success = setSrcsetFromDataAttr(image)
      if (!success) {
        console.warn('Image has lazy class but lacks data-srcset.')
      } else {
        image.onload = function removeLazyClass () {
          image.classList.remove('lazy')
        }
      }
    })
  })

  /**
   * Sets an element's srcset attribute to the element's srcset data attribute.
   * @param {HTMLElement} element 
   * @returns {boolean} Success
   */
  function setSrcsetFromDataAttr (element) {
    var srcsetFromData = element.dataset.srcset
    if (srcsetFromData === undefined) return false
    element.setAttribute('srcset', srcsetFromData)
    return true
  }

})()
