import express from "express";
import cors from "cors";
import "dotenv/config";
import ConnectDB from "./Config/mongodb.js";
import ConnectCloudinary from "./Config/cloudinary.js";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import cartRouter from "./routes/cartRouter.js";
import orderRouter from "./routes/orderRouter.js" 

// App Config
const app = express();
const port = process.env.PORT || 4000; 
ConnectDB(); 
ConnectCloudinary(); 

// Middleware (should come before routes)
app.use(cors({
  origin:"https://fyp-1-y2q7.vercel.app"
}));
app.use(express.json()); // in case you want to parse JSON bodies



// Route

app.get('/', (req, res) => {
  res.send('Welcome to the backend server!')
}
)
app.use("/api/user", userRouter)  
app.use("/api/product", productRouter)  
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)  


 
 app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });

