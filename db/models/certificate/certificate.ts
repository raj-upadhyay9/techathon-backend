
import mongoose, { Schema, Document, Model } from "mongoose";

interface ICertificate {
    certificate_id: string;
    event_id: string;
    user_id: string;
    certificateLink: string;
}

interface ICertificateDocument extends ICertificate, Document {
}

interface ICertificateModel extends Model<ICertificateDocument> {
  findone: (user_id: string) => Promise<ICertificateDocument>;
  findAll: () => Promise<Document[]>;
}

const CertificateSchema: Schema<ICertificateDocument> = new Schema({
    certificate_id: String,
    event_id: String,
    user_id: String,
    certificateLink: String
});

CertificateSchema.statics.findone = async function findone(event_id: string): Promise<ICertificateDocument>{
    const record = await this.findOne({ event_id });
    return record;
}

CertificateSchema.statics.findAll = async function findAll(): Promise<Document[]>{
  const record = await this.find();
  return record;
}

const Certificate = mongoose.model<ICertificateDocument, ICertificateModel>("Certificate", CertificateSchema);
export default Certificate;