import mongoose from "mongoose";
export declare class UserModel {
}
export declare const User: mongoose.Model<{
    fullName: string;
    email: string;
    password: string;
    gender: "Male" | "Female" | "male" | "female";
    profile?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    fullName: string;
    email: string;
    password: string;
    gender: "Male" | "Female" | "male" | "female";
    profile?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    fullName: string;
    email: string;
    password: string;
    gender: "Male" | "Female" | "male" | "female";
    profile?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    fullName: string;
    email: string;
    password: string;
    gender: "Male" | "Female" | "male" | "female";
    profile?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    fullName: string;
    email: string;
    password: string;
    gender: "Male" | "Female" | "male" | "female";
    profile?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    fullName: string;
    email: string;
    password: string;
    gender: "Male" | "Female" | "male" | "female";
    profile?: string | null;
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
        fullName: string;
        email: string;
        password: string;
        gender: "Male" | "Female" | "male" | "female";
        profile?: string | null;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        fullName: string;
        email: string;
        password: string;
        gender: "Male" | "Female" | "male" | "female";
        profile?: string | null;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    fullName: string;
    email: string;
    password: string;
    gender: "Male" | "Female" | "male" | "female";
    profile?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    fullName: string;
    email: string;
    password: string;
    gender: "Male" | "Female" | "male" | "female";
    profile?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=userModel.d.ts.map