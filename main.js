const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const PORT = 5000;
app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));
const start = () => {
    try {
        mongoose.connect(
            `mongodb+srv://zahard:31711298Zahard@zahard.yok8v.mongodb.net/GraphQL?retryWrites=true&w=majority`,
            () => app.listen(PORT, () => console.log(`server+db`))
        );
    } catch (e) {
        console.log(e)
    }
}
start()