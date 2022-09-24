
import mongoose, { Schema, Document, Model } from "mongoose";

interface IEventAttendance {
    event_id: string;
    user_id: string;
    certificate_id: string;
}

interface IEventAttendanceDocument extends IEventAttendance, Document {
}

interface IEventAttendanceModel extends Model<IEventAttendanceDocument> {
  findone: (user_id: string) => Promise<IEventAttendanceDocument>;
  findAll: () => Promise<Document[]>;
}

const EventAttendanceSchema: Schema<IEventAttendanceDocument> = new Schema({
    event_id: String,
    user_id: String,
    certificate_id: String
});

EventAttendanceSchema.statics.findone = async function findone(event_id: string): Promise<IEventAttendanceDocument>{
    const record = await this.findOne({ event_id });
    return record;
}

EventAttendanceSchema.statics.findAll = async function findAll(): Promise<Document[]>{
  const record = await this.find();
  return record;
}

const EventAttendance = mongoose.model<IEventAttendanceDocument, IEventAttendanceModel>("EventAttendance", EventAttendanceSchema);
export default EventAttendance;