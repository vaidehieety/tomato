import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://vaidehieety:vaidehieetyagi3012@cluster0.cmayo.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}
