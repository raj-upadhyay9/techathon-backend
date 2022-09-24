
import mongoose, { Schema, Document, Model } from "mongoose";

interface IEvent {
    event_id: string;
    eventName: string;
    eventDate: Date;
    imageLink: string;
    host: string;
    location: string;
    desc: string;
    available: string;
    domain: string;
    price: number;
    duration: string;
}

interface IEventDocument extends IEvent, Document {
  setEventName: (this: IEventDocument) => Promise<void>;
  setEventDate: (this: IEventDocument) => Promise<void>;
  setImageLink: (this: IEventDocument) => Promise<void>;
}

interface IEventModel extends Model<IEventDocument> {
  findone: (user_id: string) => Promise<IEventDocument>;
  findAll: () => Promise<Document[]>;
}

const EventSchema: Schema<IEventDocument> = new Schema({
    event_id: String,
    eventName: String,
    eventDate: Date,
    imageLink: String,
    host: String,
    location: String,
    desc: String,
    available: String,
    domain: String,
    price: Number,
    duration: String
});



EventSchema.methods.setEventName = async function setEventName(this: IEventDocument, newEventName: string): Promise<void> {
    this.eventName = newEventName;
    await this.save();
}

EventSchema.methods.setEventDate = async function setEventDate(this: IEventDocument, newEventDate: Date): Promise<void> {
  this.eventDate = newEventDate;
  await this.save();
}


EventSchema.methods.setImageLink = async function setImageLink(this: IEventDocument, newImageLink: string): Promise<void> {
  this.imageLink = newImageLink;
  await this.save();
}

EventSchema.statics.findone = async function findone(
  user_id: string
): Promise<IEventDocument>{
  const record = await this.findOne({ user_id });
  return record;
}

EventSchema.statics.findAll = async function findAll(): Promise<Document[]>{
  const record = await this.find();
  return record;
}

const Event = mongoose.model<IEventDocument, IEventModel>("Event", EventSchema);
export default Event;