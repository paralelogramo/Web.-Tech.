import { User } from "./Users";

export class Session {
    constructor(
        public token: String,
        public user: User
    ){}
}