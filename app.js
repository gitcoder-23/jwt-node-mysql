require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./api/users/user.router');

// data pass from js to json by below
app.use(express.json());
// app.get('/api', (req, res)=>{
//     res.json({
//         success: 1,
//         message: "The is rest api."
//     });
// });

// api for postman for all create-get-update-delete
app.use('/api/users', userRouter);

// app link listen
app.listen(process.env.APP_PORT, ()=>{
    console.log('Server is running on port : ', process.env.APP_PORT);
})