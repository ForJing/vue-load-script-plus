/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019-03-17
 * Time: 15:43
 */

const LoadScript = {
  install: function (Vue) {
    Vue.loadScript = Vue.prototype.$loadScript = function (src, attrObject) { // eslint-disable-line no-param-reassign
      return new Promise(function (resolve, reject) {
        if (document.querySelector('script[src="' + src + '"]')) {
          resolve()

          return
        }

        const el = document.createElement('script')

        el.type = 'text/javascript'
        el.async = true
        el.src = src
        if (attrObject != null &&
          !Array.isArray(attrObject) &&
          typeof attrObject !== 'string' &&
          typeof attrObject !== 'number'
        ) {
          Object.keys(attrObject).forEach(key => {
            el.setAttribute(key, attrObject[key])
          })
        }

          el.addEventListener('load', resolve)
        el.addEventListener('error', reject)
        el.addEventListener('abort', reject)

        document.head.appendChild(el)
      })
    }

    Vue.unloadScript = Vue.prototype.$unloadScript = function (src) { // eslint-disable-line no-param-reassign
      return new Promise(function (resolve, reject) {
        const el = document.querySelector('script[src="' + src + '"]')

        if (!el) {
          reject()

          return
        }

        document.head.removeChild(el)

        resolve()
      })
    }
  },
}

export default LoadScript
