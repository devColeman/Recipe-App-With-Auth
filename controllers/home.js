module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    getSignIn: (req, res)=>{
        res.render('signin.ejs')
    }
} 