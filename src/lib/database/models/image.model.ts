import { Schema, model, models, Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    securedUrl: string;
    width?: number;
    height?: number;
    config?: Record<string, unknown>;
    transformationUrl?: string;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author?: ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const ImageSchema = new Schema({
    title: { type: String, require: true},
    transformationType: { type: String, require: true},
    publicId: { type: String, require: true},
    securedUrl: { type: URL, require: true},
    width: {type: Number},
    height: {type: Number},
    config: {type: Object},
    transformationUrl:  { type: URL},
    aspectRatio: {type: String},
    color: {type: String},
    prompt: {type: String},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()}
});


const Image = models?.Image || model('Image', ImageSchema);

export default Image;