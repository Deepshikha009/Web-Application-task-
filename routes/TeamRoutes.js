const express=require('express')
const { postTeam, getSingleTeam } = require('../controllers/TeamController')
const router=express.Router()

router.post("/postTeams",postTeam)
router.get("/getTeam/:id",getSingleTeam)
module.exports=router