import {Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    username: {
        type: String, 
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        unique: true
    },
    document:{
        type: String,
        unique: true
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
});

userSchema.statics.encryptData = async (data)=>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(data, salt)
}

userSchema.statics.comparePassword = async (password, recivedPassword)=>{
    return await bcrypt.compare(password, recivedPassword)
}

export default model('User',userSchema);