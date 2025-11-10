const Todo = require('./model/Todo')

module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    getSignIn: (req, res)=>{
        res.render('signin.ejs')
    },
    createTodo: async (req, res)=>{
        try{
            await Todo.create({todo: req.body.todoItem, completed: false, userId: req.user.id})
            console.log('Todo has been added!')
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    }
} 