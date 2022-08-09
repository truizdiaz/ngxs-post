import { Post } from "src/app/interfaces/post";

export class AgregarPost {
    static readonly type = '[Post page] AgregarPost';

    constructor(public payload: Post) {}
}

export class EliminarPost {
    static readonly type = '[Post page] EliminarPost';

    constructor(public id: string) {}
}