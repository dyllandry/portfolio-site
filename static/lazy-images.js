;(function lazyImages () {

  /**
   * Set image srcset attribute on load to prevent content reflow. If conducted
   * on DOMContentLoaded, browser tries to use srcset image prior to embed
   * base64 images appearing on document. As higher resolution images load, text
   * content will jump.
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
