import { ref } from 'vue'

const mobile = {
  width: 768,
  devices: ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone'],
}

const debounce = (func, wait) => {
  let timerId
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timerId)
    timerId = setTimeout(() => func.apply(context, args), wait)
  }
}

export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent) || (window.innerWidth <= mobile.width)
}

export default {
  install: (app, options) => {
    const target = ref(false)
    const init = () => {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
        target.value = true
        return false
      }

      const getContainerWidth = val => {
        target.value = val <= mobile.width
        return false
      }

      getContainerWidth(document?.body?.clientWidth || 0)

      const debounceContainerWidth = debounce(el => {
        getContainerWidth(el.width)
      }, 300)
  
      const resizeWidth = new ResizeObserver(entries => {
        debounceContainerWidth(entries[0].contentRect)
      })

      resizeWidth.observe(document.body)
    }

    init()

    app.provide('isMobile', target)
  },
}