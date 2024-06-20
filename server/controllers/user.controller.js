const userModel = require ("../models/user.model")
const bycrypt = require("bcrypt");
const { text } = require("express");
const nodemailer = require("nodemailer");

const ListOfStudent = (req, res) => {
    res.send([
        {
            "id": 1,
            "name": "Leanne Gram",
            "username" : "Bret",
            "email" : "Sincere@April.biz"
        },
        {
            "id": 2,
            "name": "Leanne Gram",
            "username" : "Bret",
            "email" : "Sincere@April.biz"
        },
        {
            "id": 3,
            "name": "Leanne Gram",
            "username" : "Bret",
            "email" : "Sincere@April.biz"
        },
        {
            "id": 4,
            "name": "Leanne Gram",
            "username" : "Bret",
            "email" : "Sincere@April.biz"
        },

    ])
    
}



const register = (req, res) => {
    console.log(req.body);
    let user = new userModel(req.body)
    user.save()
        .then((user) => {
            console.log("user saved successfully");
            console.log(user);


            res.send({message: "user saved successfully", status: true })
        })

        .catch((err) => {
            console.log(err);
            res.send("user failed to signUp")
        })
}


const signin = async (req, res) => {
    const { email, password} = req.body
    let user;
    try {
        user = await   userModel.findOne({email: email})
    }catch (error){
        return new Error
    }
    if (!user) {
        res.status(400).json({
            Message: "user not found, please sign up!!!"
        })
        console.log("user not found, please sign up!!!", user);
    }

    const correctPassword = bycrypt.compareSync(password, user.password)

    if (!correctPassword) {
        res.status (401).json({
            Message: "Wrong login detaills"
        })
        console.log("Wrong login details");
    }
    else {
        const token = jwt.sign({user:user.email},secret,{expiresIn: '1h'})
        res.status(200).json({
            Message: "user logged in successfully",
            status: true,
            theToken: token
        })
        
        console.log("user logged in successfully", correctPassword);
    }
  
}

const dashboard = (req,res)=>{
    userModel.find().then((data)=>{
        console.log(data);
        res.send({data:data})
    })
    .catch((err)=>{
        console.log(err);
    })
}

const verified=(req, res)=>{
    let token=req.headers.authorization.split(" ")[1];
    jwt.verify(token,secret,(err,result)=>{
        if(err){
            res.send({message:"authentication failed",status:false,user:err})
        }else{
            res.send({message:"authenticated user",status:true,user:result})
            console.log(result);
        }
    })

}
const sendMailer=async(req,res)=>{
    const { email} = req.body

    const transporter = nodemailer.createTransport({
        service: "gmail",
       auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
       }
      });

      let mailOptions = {
        from: process.env.Email,
        to: email,
        // "kadkhadijah@gmail.com,pearllabazaar@gmail.com", // list of receivers
        subject: "password recovery", // Subject line
        // text: "Yo there, you requested for change of pasword please click on the link below to reset your password. if you do not resuest for this password, please ignore this mail",
         // plain text body
         html: `
         <h4>Hi there, you requested for a change of password. Please click on the link below to reset your password. </h4>
         <a href="http://localhost:3000/reset-password">Click here to reset your password</a>
     <h4>If you did not request for this password reset, please ignore this mail</h4>
         `
    }
    console.log(email);
    transporter.sendMail(mailOptions).then((info)=>{
        console.log(info);
        res.send({message:"email sent successfully",status:true})
    }).catch((err)=>{
        console.log(err);
        res.send({message:"email not sent",status:false})
    })

}



module.exports = {ListOfStudent, register, signin, dashboard, verified,sendMailer}