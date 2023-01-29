const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Atlas DB Connected Successfully');
    })
    .catch((er) => {
        console.log(er);
    });

