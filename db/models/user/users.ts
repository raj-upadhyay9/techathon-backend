
import mongoose, { Schema, Document, Model } from "mongoose";

interface IUser {
  email_id: string;
  password: string;
  firstName: string;
  lastName: string;
  college: string;
}

interface IUserDocument extends IUser, Document {
  setPassword: (this: IUserDocument) => Promise<void>;
  setName: (this: IUserDocument) => Promise<void>;
  setCollege: (this: IUserDocument) => Promise<void>;
}

interface IUserModel extends Model<IUserDocument> {
  findone: (user_id: string) => Promise<IUserDocument>;
  findAll: () => Promise<Document[]>;
}

const UserSchema: Schema<IUserDocument> = new Schema({
  email_id: String,
  password: String,
  firstName: String,
  lastName: String,
  college:String
});



UserSchema.methods.setPassword = async function setPassword(this: IUserDocument, newPassword: string): Promise<void> {
    this.password = newPassword;
    await this.save();
}

UserSchema.methods.setName = async function setName(this: IUserDocument, newFirstName: string, newLastName:string): Promise<void> {
  this.firstName = newFirstName;
  this.lastName = newLastName;
  await this.save();
}


UserSchema.methods.setCollege = async function setCollege(this: IUserDocument, newCollege: string): Promise<void> {
  this.college = newCollege;
  await this.save();
}

UserSchema.statics.findone = async function findone(
  user_id: string
): Promise<IUserDocument>{
  const record = await this.findOne({ user_id });
  return record;
}

UserSchema.statics.findAll = async function findAll(): Promise<Document[]>{
  const record = await this.find();
  return record;
}

const User = mongoose.model<IUserDocument, IUserModel>("User", UserSchema);
export default User;