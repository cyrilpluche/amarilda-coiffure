import Api from './Api'
import _helper from '../helpers'

const url = 'prestation/'

const Prestation = {
    model:  {
        prestation_title: '',
        prestation_description: '',
        prestation_price: '',
        prestation_reduction: '',
    },
    rules:  [
        { label: 'prestation_title', type: 'text' },
        { label: 'prestation_description', type: 'text' },
        { label: 'prestation_price', type: 'number' },
        { label: 'prestation_reduction', type: 'number' }
    ],

    create (prestation) {
        return Api.post(url + 'create', prestation).then(res => res.data)
    },

    findAll () {
        return Api.get(url + 'find_all').then(res => res.data)
    },

    update (prestation) {
        let where = _helper.Request.urlFromObject({_id: prestation._id})
        return Api.put(url + 'update' + where, prestation).then(res => res.data)
    },

    delete (prestations) {
        return Api.post(url + 'delete', prestations).then(res => res.data)
    },
}

export default Prestation