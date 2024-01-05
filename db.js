const {Sequelize} = require('sequelize');


//localhst: db

module.exports = new Sequelize(
    'mindcards_db',
    'postgres',
    '6238',
    {
        dialect: 'postgres',
        host: process.env.DB_HOST, 
        port: process.env.DB_PORT
    }

)


//remote db

// module.exports = new Sequelize(
//     {
//         database: 'tofi_project_db',
//         username: 'admin',
//         password: 'KqE9p4Kf5eoPq0uPhg3H0psr0boxBHwv',
//         dialect: 'postgres',
//         host: 'dpg-clu5a621hbls73ea14fg-a.frankfurt-postgres.render.com', 
//         port: process.env.DB_PORT,
//         pool: {
//             max: 3,
//             min: 1,
//             idle: 10000,
//         },
//         dialectOptions: {
//             ssl: {
//                 require: true,
//                 rejectUnauthorized: false
//             },
//             keepAlive: true,
//         },
//         ssl:true,
        
//     })