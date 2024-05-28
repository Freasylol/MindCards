const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    first_name: {type: DataTypes.STRING},
    last_name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
})

const Role = sequelize.define('role', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

const UserLog = sequelize.define('user_log', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATE},
    action: {type: DataTypes.STRING},
})

const SearchHistory = sequelize.define('search_history', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    search_text: {type: DataTypes.STRING}
})

const BrowsingHistory = sequelize.define('browsing_history', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

const CardSet = sequelize.define('card_set', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
})

const TaskSet = sequelize.define('task_set', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    theme: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
})

const Task = sequelize.define('task', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    condition: {type: DataTypes.STRING},
    task: {type: DataTypes.STRING},
    answer: {type: DataTypes.STRING},
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}  
})

const UserRate = sequelize.define('user_rate', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    grade: {type: DataTypes.INTEGER}
})

const Card = sequelize.define('card', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    task: {type: DataTypes.STRING},
    answer: {type: DataTypes.STRING}
})

const FavoriteCardSet = sequelize.define('favorite_card_set', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const FavoriteTaskSet = sequelize.define('favorite_task_set', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

Role.hasMany(User);
User.belongsTo(Role);

User.hasMany(UserLog);
UserLog.belongsTo(User);

User.hasMany(SearchHistory);
SearchHistory.belongsTo(User);

User.hasMany(BrowsingHistory);
BrowsingHistory.belongsTo(User);

User.hasMany(CardSet);
CardSet.belongsTo(User);

User.hasMany(TaskSet);
TaskSet.belongsTo(User);

CardSet.hasMany(BrowsingHistory);
BrowsingHistory.belongsTo(CardSet);

User.hasMany(UserRate);
UserRate.belongsTo(User);

CardSet.hasMany(UserRate);
UserRate.belongsTo(User);

CardSet.hasMany(Card);
Card.belongsTo(CardSet);

TaskSet.hasMany(Task);
Task.belongsTo(TaskSet);

User.hasMany(FavoriteCardSet);
FavoriteCardSet.belongsTo(User);

CardSet.hasMany(FavoriteCardSet);
FavoriteCardSet.belongsTo(CardSet);

User.hasMany(FavoriteTaskSet);
FavoriteTaskSet.belongsTo(User);

TaskSet.hasMany(FavoriteTaskSet);
FavoriteTaskSet.belongsTo(TaskSet);

module.exports = {
    User, 
    Role,
    UserLog,
    SearchHistory,
    BrowsingHistory,
    CardSet,
    Category,
    UserRate,
    Card,
    FavoriteCardSet,
    Task,
    TaskSet,
    FavoriteTaskSet
}
