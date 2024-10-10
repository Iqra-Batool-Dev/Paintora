import mongoose, {Schema} from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"




const userSchema = new Schema(
    {
        username: {
            type: String,
            required : true,
            unique: true,
            lowercase: true,
            trim: true,
            index : true
        },
        email: {
            type: String,
            required : true,
            unique: true,
            lowercase: true,
            trim: true
        },
        fullname: {
            type: String,
            required : true,
            trim: true,
            index: true
        },
        avatar: {
            type: String, //cloudinary url
            required: true
        },
        password: {
            type: String,
            required: [true , 'password is required']
        },
        location: {
            type: String
        },
        bio: {
            type : String
        },
        skills: [
            {type: String}
        ],
        refreshToken: {
            type: String
        } ,
        socialLinks: {
            facebook:{
                type: String,
                required : false
            },
            linkedIn : {
                type: String,
                required : false
            },
            instagram: {
                type: String,
                required : false
            }
        }
    },
    {
        timestamps : true
    }
)

//password hashing
userSchema.pre("save" , async function (next) {
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password , 10)
    next()
})

// custom methods 
userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password , this.password) //return true or false
}

userSchema.methods.generateAccessToken = function (params) {
    return jwt.sign(
        {
            _id : this._id,
            email: this.email,
            username : this.username
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
        
    )
}
userSchema.methods.generateRefreshToken = function (params) {
    return jwt.sign(
        {
            _id : this._id,
        },
        process.env.ACCESS_REFRESH_SECRET,
        {
            expiresIn : process.env.ACCESS_REFRESH_EXPIRY
        }
        
    )
}

export const  User = mongoose.model("User", userSchema)