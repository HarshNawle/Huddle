import mongoose from "mongoose";
export declare const Message: mongoose.Model<{
    senderID: mongoose.Types.ObjectId;
    receiverID: mongoose.Types.ObjectId;
    message: string;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    senderID: mongoose.Types.ObjectId;
    receiverID: mongoose.Types.ObjectId;
    message: string;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    senderID: mongoose.Types.ObjectId;
    receiverID: mongoose.Types.ObjectId;
    message: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    senderID: mongoose.Types.ObjectId;
    receiverID: mongoose.Types.ObjectId;
    message: string;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    senderID: mongoose.Types.ObjectId;
    receiverID: mongoose.Types.ObjectId;
    message: string;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    senderID: mongoose.Types.ObjectId;
    receiverID: mongoose.Types.ObjectId;
    message: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        senderID: mongoose.Types.ObjectId;
        receiverID: mongoose.Types.ObjectId;
        message: string;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        senderID: mongoose.Types.ObjectId;
        receiverID: mongoose.Types.ObjectId;
        message: string;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    senderID: mongoose.Types.ObjectId;
    receiverID: mongoose.Types.ObjectId;
    message: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    senderID: mongoose.Types.ObjectId;
    receiverID: mongoose.Types.ObjectId;
    message: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=messageModel.d.ts.map