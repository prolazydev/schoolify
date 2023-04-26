import { IBase, } from "./index";

interface IUser extends IBase {
    username: string,
}

export type User = IUser; 