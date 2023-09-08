const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://hassan:hassan1234@cluster0.hfuxjbb.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority';


mongoose.connect(connectionString)
    .then(console.log('CONNECT TO THE DATABASE...'))
    .catch((err) => { console.log(err) }) 