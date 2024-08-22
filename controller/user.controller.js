const users = require('../model/user.model')


let getAllUser = async (req, res)=>{
    try {
        let userData =  await users.find()
            res.status(200).json(userData)
    } catch (error) {
        res.status(500).send(error.message)
    }
}


// CRUD use
let getOneUser = async (req,res)=>{
    try {
        let userData = await users.findOne({_id: req.params.id})
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

let getUpdateUser = async (req,res)=>{
    try {
        let userData = await users.findOne({_id: req.params.id})
        userData.name = req.body.name,
        userData.email = req.body.email,
        userData.password = req.body.password

        await userData.save()
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

let deleteUser = async (req,res)=>{
    try {
        users.deleteOne({_id: req.params.id})
        res.status(200).json({message: 'delete'})
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}

let userCreate = async (req, res)=>{
    try {
        let userData = new users({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
    
        await userData.save()
        res.status(200).json(userData)

    } catch (error) {
        res.status(500).send(error.message)
    }
}



module.exports = {userCreate, getAllUser, getOneUser, getUpdateUser, deleteUser}