
import mongoose, { Schema, Document, Model } from "mongoose";

interface IEventRegister {
    event_id: string;
    user_id: string;
}

interface IEventRegisterDocument extends IEventRegister, Document {
}

interface IEventRegisterModel extends Model<IEventRegisterDocument> {
  findone: (user_id: string) => Promise<IEventRegisterDocument>;
  findAll: () => Promise<Document[]>;
}

const EventRegisterSchema: Schema<IEventRegisterDocument> = new Schema({
    event_id: String,
    user_id: String
});

EventRegisterSchema.statics.findone = async function findone(event_id: string): Promise<IEventRegisterDocument>{
    const record = await this.findOne({ event_id });
    return record;
}

EventRegisterSchema.statics.findAll = async function findAll(): Promise<Document[]>{
  const record = await this.find();
  return record;
}

const EventRegister = mongoose.model<IEventRegisterDocument, IEventRegisterModel>("EventRegister", EventRegisterSchema);
export default EventRegister;