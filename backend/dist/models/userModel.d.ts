import mongoose from "mongoose";
export declare class UserModel {
}
export declare const User: mongoose.Model<{
    fullName: string;
    userName: string;
    password: string;
    profile: string;
    gender: "male" | "female";
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    fullName: string;
    userName: string;
    password: string;
    profile: string;
    gender: "male" | "female";
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    fullName: string;
    userName: string;
    password: string;
    profile: string;
    gender: "male" | "female";
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    fullName: string;
    userName: string;
    password: string;
    profile: string;
    gender: "male" | "female";
}, mongoose.Document<unknown, {}, {
    fullName: string;
    userName: string;
    password: string;
    profile: string;
    gender: "male" | "female";
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    fullName: string;
    userName: string;
    password: string;
    profile: string;
    gender: "male" | "female";
} & {
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
        userName: string;
        password: string;
        profile: string;
        gender: "male" | "female";
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        fullName: string;
        userName: string;
        password: string;
        profile: string;
        gender: "male" | "female";
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    fullName: string;
    userName: string;
    password: string;
    profile: string;
    gender: "male" | "female";
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    fullName: string;
    userName: string;
    password: string;
    profile: string;
    gender: "male" | "female";
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=userModel.d.ts.map