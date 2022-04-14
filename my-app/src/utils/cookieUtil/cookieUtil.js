import Cookies from 'js-cookie'


   export function setCookie(name, value) {
        return Cookies.set(name, value, { expires: 0.00260416666 })
    }

   export function getCookie(key) {
        return Cookies.get(key)
    }

