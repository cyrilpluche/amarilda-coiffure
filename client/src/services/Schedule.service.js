import Api from './Api'
import _helper from '../helpers'

const url = 'schedule/'

const Schedule = {
    model:  {
        shift: [],
        date: '',
    },
    rules:  [
        'array',
        'date'
    ],

    create (schedule) {
        return Api.post(url + 'create', schedule).then(res => res.data)
    },

    findAll () {
        return Api.get(url + 'find_all').then(res => res.data)
    },

    update (schedule) {
        let where = _helper.Request.urlFromObject({_id: schedule._id})
        return Api.put(url + 'update' + where, schedule).then(res => res.data)
    },

    delete (schedules) {
        return Api.post(url + 'delete', schedules).then(res => res.data)
    },
}

export default Schedule