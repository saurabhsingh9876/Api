const dataModel = require('../models/dataModel');
 


////*creattext*////
const creattext = async (req, res) => {
    try {
        const { title, contant } = req.body;

        // Validation checks
        if (!title || title.length <= 5) {
            return res.status(400).json('tital should be greater than 5 characters');
        }

        if (!contant || contant.length < 10) {
            return res.status(400).json('contant should be at least 10 characters');
        }

        const newdata = await new dataModel({
            title,
            contant
        }).save();

        res.status(201).json({ message: "Text added successfully", newdata });

    } catch (error) {
        console.error(error);
        res.status(500).json('Internal server error');
    }
};



   /////*updatetext*/////
const updatetext=async(req,res)=>{
    try {
        const { title, contant } = req.body;
        const {id}=req.params
        if (!title || title.length <= 5) {
            return res.status(400).json('tital should be greater than 5 characters');
        }

        if (!contant || contant.length < 10) {
            return res.status(400).json('contant should be at least 10 characters');
        }
        
        const updatedData = await dataModel.findByIdAndUpdate(
            id,
            { title, contant },
            { new: true } 
        );

        if (!updatedData) {
            return res.status(404).json('Text not found');
        }

        res.status(201).json({ message: "Text updated successfully", updatedData });



    } catch (error) {
        console.error(error);
        res.status(500).json('Internal server error');
    }
}




////*Getalldata*////
const Getalldata=async(req,res)=>{
    try {
        const data=await dataModel.find({})
        res.status(201).json( data);

    } catch (error) {
        console.error(error);
        res.status(500).json('Internal server error');
    }

}
////*Getdatabyid*////
const Getdatabyid=async(req,res)=>{
try {
   
    const { id } = req.params;

    const data = await dataModel.findById(id);

    if (!data) {
        return res.status(404).json({ message: 'Data not found' });
    }

   

    res.status(200).json({ message: 'Data retrieved successfully', data });
} catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
}
}



////*delete*////
const deleteTextById = async (req, res) => {
    try {
        const { id } = req.params;

        // Validation checks
        if (!id) {
            return res.status(400).json('ID is required');
        }

        // Find the document by ID and delete
        const deletedData = await dataModel.findByIdAndDelete(id);

        if (!deletedData) {
            return res.status(404).json('Text not found');
        }

        res.status(200).json({ message: 'Text deleted successfully', deletedData });

    } catch (error) {
        console.error(error);
        res.status(500).json('Internal server error');
    }
};

module.exports = {deleteTextById,creattext,Getalldata,Getdatabyid,updatetext};
