export class Quotes{
    constructor(
        public content: string = '',
        public author : string = '',
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}
}