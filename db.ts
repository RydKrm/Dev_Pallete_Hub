import mongoose from "mongoose";


let isConnect:boolean = false;

 const connectToDatabase = async()=>{
    mongoose.set('strictQuery',true);
    if(!process.env.MONGODB_URL) {
        return console.log('MongoDB url is not found ');
    } else if(isConnect){
        return console.log('MongoDB is already connected ');
    } else {
        try {
          await mongoose.connect(process.env.MONGODB_URL,{dbName:'dev_palette_hub'})
          isConnect = true;
        } catch (error) {
            console.error(error);
        }
    }

}

export default connectToDatabase;