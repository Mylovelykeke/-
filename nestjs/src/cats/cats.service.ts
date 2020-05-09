import { Injectable } from '@nestjs/common';
class Cat {
   readonly name:string;
   readonly age:number;
}
@Injectable()
export class CatsService {
    private readonly cats:Cat[] = [];
    
    create(cat:Cat){
        this.cats.push(cat);
    }
    findAll():Cat[] {
        return this.cats;
    }
}
