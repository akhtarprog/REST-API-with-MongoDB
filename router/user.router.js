const router = require('express').Router()

const { userCreate, getAllUser, getOneUser, getUpdateUser, deleteUser } = require('../controller/user.controller')



//user create
router.get('/', getAllUser)
router.get("/:id", getOneUser)
router.patch("/:id", getUpdateUser)
router.delete("/:id", deleteUser)
router.post('/', userCreate)



module.exports = router;