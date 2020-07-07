import moment from 'moment';

export default [{
    id: '1',
    description: 'Pens',
    note: '',
    amount: 499,
    createdAt: 0
}, {
    id: '2',
    description: 'Notebooks',
    note: 'for photo biz',
    amount: 1199,
    createdAt: moment(0).add(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Bags',
    note: 'new camera bag',
    amount: 11900,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}];