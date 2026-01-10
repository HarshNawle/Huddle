import mongoose from "mongoose";
export declare const Conversation: mongoose.Model<{
    participants: mongoose.Types.ObjectId[];
    messages: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    participants: mongoose.Types.ObjectId[];
    messages: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    participants: mongoose.Types.ObjectId[];
    messages: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    participants: mongoose.Types.ObjectId[];
    messages: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    participants: mongoose.Types.ObjectId[];
    messages: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    participants: mongoose.Types.ObjectId[];
    messages: mongoose.Types.ObjectId[];
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
        participants: mongoose.Types.ObjectId[];
        messages: mongoose.Types.ObjectId[];
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        participants: mongoose.Types.ObjectId[];
        messages: mongoose.Types.ObjectId[];
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    participants: mongoose.Types.ObjectId[];
    messages: mongoose.Types.ObjectId[];
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    participants: mongoose.Types.ObjectId[];
    messages: mongoose.Types.ObjectId[];
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=conversationModel.d.ts.map