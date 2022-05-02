export class Pagination<T>{
    content: T[];
    totalPages: number;
    currentPage: number;

    constructor() {
        this.content = [];
        this.totalPages = 0;
        this.currentPage = 0;
    }

}