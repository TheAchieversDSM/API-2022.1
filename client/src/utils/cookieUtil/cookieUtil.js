import Cookies from 'js-cookie'

    export function setCookie(name, value) {
        return Cookies.set(name, value, { expires: 0.5 })
    }

    export function getCookie(key) {
        return Cookies.get(key)
    }

    export function deleteCookie(key) {
        return Cookies.remove(key)
    }

