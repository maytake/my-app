export default {
    getItem: function(key) {
        let value
        try {
            value = sessionStorag.getItem(key)
        } catch (ex) {
            // 开发环境下提示error
            if (__DEV__) {
                console.error('sessionStorage.getItem报错, ', ex.message)
            }
        } finally {
            return value
        }
    },
    setItem: function(key, value) {
        try {
            // ios safari 无痕模式下，直接使用 sessionStorage.setItem 会报错
            sessionStorag.setItem(key, value)
        } catch (ex) {
            // 开发环境下提示 error
            if (__DEV__) {
                console.error('sessionStorage.setItem报错, ', ex.message)
            }
        }
    },
    removeItem: function(key) {
        try {
            // ios safari 无痕模式下，直接使用 sessionStorage.setItem 会报错
            sessionStorag.removeItem(key)
        } catch (ex) {
            // 开发环境下提示 error
            if (__DEV__) {
                console.error('sessionStorage.removeItem报错, ', ex.message)
            }
        }
    },

}