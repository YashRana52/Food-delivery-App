import OrderModel from "../models/OrderModel.js";
import userModel from "../models/UserModel.js";

// Placing user order from frontend
const placeOrder = async (req, res) => {
  try {
    // Create a new order
    const newOrder = new OrderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();

    // Update the user's cart data
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    // Respond with the order details or success message
    res.json({ success: true, order: newOrder }); // Responding with the newly created order
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { placeOrder };
