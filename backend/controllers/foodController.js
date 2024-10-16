import fs from 'fs';
import foodModel from "../models/foodModel.js"; // Ensure correct filename casing

// Add food item
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.error("Error while adding food:", error); // Improved error logging
        res.status(500).json({ success: false, message: "Error occurred", error: error.message });
    }
};

// List all food items
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.error("Error while fetching food items:", error); // Improved error logging
        res.status(500).json({ success: false, message: "Error occurred", error: error.message });
    }
}
// remove food item

const removeFood = async (req,res)=>{
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message: "Food remove"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "error food not remove"})
        
        
    }

}


export { addFood, listFood, removeFood };

