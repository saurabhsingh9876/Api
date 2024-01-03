const {deleteTextById,creattext,Getalldata,Getdatabyid,updatetext}=require('../controller/datacontroller')
const express=require('express')
const router=express.Router()

router.post('/creat',creattext)

router.put('/update/:id',updatetext);

router.get('/alldata',Getalldata)
router.get('/singledata/:id', Getdatabyid);

// router.get('/singledata/:id',Getdatabyid)

router.delete('/delete/:id',deleteTextById)

module.exports=router