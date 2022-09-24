
import mongoose, { Schema, Document, Model } from "mongoose";

interface ITransaction {
    transaction_id: string;
    event_id: string;
    user_id: string;
}

interface ITransactionDocument extends ITransaction, Document {
}

interface ITransactionModel extends Model<ITransactionDocument> {
  findone: (user_id: string) => Promise<ITransactionDocument>;
  findAll: () => Promise<Document[]>;
}

const TransactionSchema: Schema<ITransactionDocument> = new Schema({
    transaction_id: String,
    event_id: String,
    user_id: String
});

TransactionSchema.statics.findone = async function findone(event_id: string): Promise<ITransactionDocument>{
    const record = await this.findOne({ event_id });
    return record;
}

TransactionSchema.statics.findAll = async function findAll(): Promise<Document[]>{
  const record = await this.find();
  return record;
}

const Transaction = mongoose.model<ITransactionDocument, ITransactionModel>("Transaction", TransactionSchema);
export default Transaction;