import Api from './Api'
import _helper from '../helpers'

const url = 'contact/'

const Contact = {
    create (contact) {
        return Api.post(url + 'create', contact).then(res => res.data)
    },

    findAll () {
        return Api.get(url + 'find_all').then(res => res.data)
    },

    update (contact) {
        let where = _helper.Request.urlFromObject({_id: contact._id})
        return Api.put(url + 'update' + where, contact).then(res => res.data)
    },

    delete (contacts) {
        return Api.post(url + 'delete', contacts).then(res => res.data)
    },
}

export default Contact