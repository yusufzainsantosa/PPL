const {
    perkalianNilai,
    penambahanString,
} = require('./handler');

const routes = [   
    {
        method: 'POST',
        path: '/kali',
        handler: perkalianNilai,
    }, 
    {
        method: 'POST',
        path: '/tambah',
        handler: penambahanString,
    },
];

module.exports = routes;