
import mongoose, { Schema, Document, Model } from "mongoose";

interface IUser {
  firstName: string;
  lastName: string;
  age: number;
  dateOfEntry?: Date;
  lastUpdated?: Date;
}

interface IUserDocument extends IUser, Document {
    setLastUpdated: (this: IUserDocument) => Promise<void>;
    sameLastName: (this: IUserDocument) => Promise<Document[]>;
}

interface IUserModel extends Model<IUserDocument> {
    findOneOrCreate: (userId: string) => Promise<IUserDocument>;
}

const UserSchema: Schema<IUserDocument> = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  dateOfEntry: {
    type: Date,
    default: new Date()
  },
  lastUpdated: {
    type: Date,
    default: new Date()
  }
});



UserSchema.methods.setLastUpdated = async function setLastUpdated(this: IUserDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdated || this.lastUpdated < now) {
    this.lastUpdated = now;
    await this.save();
  }
}

UserSchema.statics.findOneOrCreate = async function findOneOrCreate(
  userId: string
): Promise<IUserDocument> {
  const record = await this.findOne({ userId });
  if (record) {
    return record;
  } else {
    return this.create({ userId });
  }
}

const User = mongoose.model<IUserDocument, IUserModel>("User", UserSchema);
export default User;