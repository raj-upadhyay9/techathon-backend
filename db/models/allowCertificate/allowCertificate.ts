
import mongoose, { Schema, Document, Model } from "mongoose";

interface IallowCertificate {
    allow: boolean;
    event_id: string;
}

interface IallowCertificateDocument extends IallowCertificate, Document {
}

interface IallowCertificateModel extends Model<IallowCertificateDocument> {
  findone: (user_id: string) => Promise<IallowCertificateDocument>;
  findAll: () => Promise<Document[]>;
}

const allowCertificateSchema: Schema<IallowCertificateDocument> = new Schema({
    allow: Boolean,
    event_id: String,
});

allowCertificateSchema.statics.findone = async function findone(event_id: string): Promise<IallowCertificateDocument>{
    const record = await this.findOne({ event_id });
    return record;
}

allowCertificateSchema.statics.findAll = async function findAll(): Promise<Document[]>{
  const record = await this.find();
  return record;
}

const allowCertificate = mongoose.model<IallowCertificateDocument, IallowCertificateModel>("allowCertificate", allowCertificateSchema);
export default allowCertificate;