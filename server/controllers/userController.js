import userModel from "../Model/userModel";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const registerUser = async(req, res)=>{
    try{
        const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ success: false, message: 'Missing Details' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt)
  const userData ={
    name,
    email,
    password: hashPassword
  }
  const newUser = new userModel(userData)
  const user = await newUser.save();
  const token = jwt.sign({id:user._id}, process.env.JWT_Secret)
  res.json({success: true, token, user:{name : user.name}})



    }catch(error){
      console.log(error);
      res.json({success :false, message:error.message})
      

    }
}


export const loginUser = async(req, res)=>{
  try {
    const {email, password} = req.body;
    const user = await userModel.findOne({email});
    if(!user){
      return res.json({success: false, message: "User doesn't exist"})
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(isMatch){
      const token = jwt.sign({id:user._id}, process.env.JWT_Secret)
      res.json({success: true, token, user:{name: user.name}})
    }else{
      return res.json({success: false, message: 'Invalid credentials'})
    }
  } catch (error) {
    console.log(error);
    res.json({success: false, message:error.message})
    
    
  }

}


export const userCredits = async (req, res) => {
  try {
    const {userId_} = req.body;
    const user = await userModel.findById(userId_);
    res.json({success: true, credits: user.creditBalance, user:{name: user.name}})
  } catch (error) {
    console.log(error);
    res.json({success: false, message:error.message})
    
    
  }

  
}
