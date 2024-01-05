const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const path = require('path');
const cors = require('cors');
const errorHandler = require('./middleware/ErrorHadlingMiddleware');

const app = express();

const PORT =  process.env.PORT || 3001; 

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync().then(req => app.listen(PORT, () => console.log(`Server running on port ${PORT}`))); 
    } catch (e) {
        console.log(e)
    }
}

start();

const roleRouter = require('./routes/roleRouter');
const cardSetRouter = require('./routes/cardSetRouter');
const cardRouter = require('./routes/cardRouter');
const categoryRouter = require('./routes/categoryRouter');
const userLogRouter = require('./routes/userLogRouter');
const userRouter = require('./routes/userRouter');
const browsingHistoryRouter = require('./routes/browsingHistoryRouter');
const userRateRouter = require('./routes/userRateRouter');
const favoriteCardSet = require('./routes/favoriteCardSetRouter');

app.use(express.json());
app.use(cors());               
app.use(express.urlencoded({extended: true}));

app.use('/api/category', categoryRouter);
app.use('/api/role', roleRouter);
app.use('/api/cardSet', cardSetRouter);
app.use('/api/userLog', userLogRouter);
app.use('/api/user', userRouter);
app.use('/api/browsingHistory', browsingHistoryRouter);
app.use('/api/card', cardRouter);
app.use('/api/userRate', userRateRouter);
app.use('/api/favoriteCardSet', favoriteCardSet);

app.use(express.static(path.join(__dirname,'/client', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})

app.use(errorHandler);
