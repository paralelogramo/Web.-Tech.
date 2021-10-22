export class User{
    constructor(
        public email: String,
        public pass: String,
        public id?: number,
        public mainName?: String,
        public surName?: String,
        public nick?: String,
        public avatar?: Blob,
        public refAdmin?: number,
        public type?: number,
        public isAproved?: number,
    ){}
}