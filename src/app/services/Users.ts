export class User{
    constructor(
        public id?: number,
        public mainName?: String,
        public surName?: String,
        public nick?: String,
        public email?: String,
        public pass?: String,
        public avatar?: Blob,
        public refAdmin?: number,
    ){}
}