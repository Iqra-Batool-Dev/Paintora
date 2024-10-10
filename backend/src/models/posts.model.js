import mongoose, {Schema} from "mongoose"

const postSchema =  new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required : true
        },
        media:[
            {
                mediaType:{
                    type: String
                },
                url:{
                    type:String
                }
            }
        ],
        tags: [
            {type: String}
        ],
        cetagory: {
            type: String
        },
        createdBy : {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps : true
    }
)

export const Post =  mongoose.model("Post" , postSchema)

