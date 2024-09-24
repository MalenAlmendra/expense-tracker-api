import { Injectable } from '@nestjs/common';

@Injectable()
export class ExpensesService {
    constructor(){}

    async listForLastWeek():Promise<any>{return 'List of the last week'}

    async listForAMonth():Promise<any>{return 'list of a month ago'}

    async listForThreeAMonths():Promise<any>{return 'list of three months ago'}
    
    async listForACustomDate(startDate:string,endDate:string):Promise<any>{return `list of a custom date with start date: ${startDate} and end date: ${endDate}`}

    async createExpense(newExpense:any):Promise<any>{return newExpense}

    async updateExpense(existingExpense:any):Promise<any>{return existingExpense}

    async deleteExpense(idExpense:string):Promise<any>{return `Id ${idExpense} deleted.`}
}
