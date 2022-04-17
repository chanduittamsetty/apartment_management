const express =require("express");
const connect=require("./configs/db");
require("dotenv").config();
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const {Block,Resident,Flat} = require("./models/residents.model");

const router = express.Router();

const { register, login, newToken } = require("./controllers/auth.controller");
const residentController=require("./controllers/resident.controller")
const flatController=require("./controllers/flat.controller");

// /register
// console.log(blockController);
app.post("/register", register);
// .login
app.post("/login", login);
app.post("/block",async (req, res) => {
    try {
      const block = await Block.create(req.body);
      return res.send(block);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  app.use("/resident",residentController);
  app.use("/flat",flatController);
  app.get("/", async(req, res)=>{
    try{
        return res.send("api is working");
    }
    catch(err){
      return res.send(err.message);
    }
  })




app.listen(process.env.PORT || 5500,async () =>{
    try{
        await connect();
    console.log("listening on port 5500");
    }
    catch(err){
        console.log(err.message);
    }
});