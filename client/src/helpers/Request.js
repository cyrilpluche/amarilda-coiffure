const Request = {
    urlFromObject (object) {
        if (object) {
            let keys = Object.keys(object)
            let values = Object.values(object)
            let url = '?'
            for (let i = 0; i < keys.length; i++) {
                url += keys[i] + '=' + values[i]
                if (i < keys.length - 1) url += '&'
            }
            return url
        }
        else return ''
    },

    convertToArrayObject (array, key) {
        if (array) {
            let arrayOfObject = []
            for (let value of array) {
                arrayOfObject.push({ [key]: value})
            }
            return arrayOfObject
        }
        else return []
    }
}

export default Request