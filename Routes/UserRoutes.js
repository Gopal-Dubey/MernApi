const express = require('express');
const router = express.Router();
const userController = require('../Controllers/usercontroller');
router.get('/',(req,res) => {
    res.send(`Hello From UserRoute`);

});
router.get('/postBlog',(req,res) => {
    res.send(`Hello From UserRoute`);

});    
    router.post('/signup',usercontroller.userSignup);
    router.post('/login',usercontroller.userLogin);
    router.get('/getUser/:id',usercontroller.getUser);
    router.post('/postBlog',usercontroller.postBlog);
    router.get('/getBlog/:id',usercontroller.getBlog);

    module.exports = router;
// app.get('/', (req, res)=>{
//     res.send("Hello");
// })
// app.get('/signup',(req, res)=>{
//     res.send(`hello from signup`);
// })
// app.get('/login',(req, res)=>{
//     res.send(`hello from login`);
// })
// app.get('/getUser',(req, res)=>{
//     res.send(`hello from getUser`)
// })
// app.get('/postblog',(req, res)=>{
//     res.send(`hello from post blog`)
// })
// app.get('/getblog',(req, res)=>{
//     res.send(`hello from getblog`)
// })