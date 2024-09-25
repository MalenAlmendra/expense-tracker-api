import { BadRequestException, Injectable } from '@nestjs/common';
import { Expenses } from './entities/expenses.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expenses)
    private expensesRepository: Repository<Expenses>,
  ) {}

  async listForLastWeek(): Promise<any> {
    return 'List of the last week';
  }

  async listForAMonth(): Promise<any> {
    return 'list of a month ago';
  }

  async listForThreeAMonths(): Promise<any> {
    return 'list of three months ago';
  }

  async listForACustomDate(startDate: string, endDate: string): Promise<any> {
    return `list of a custom date with start date: ${startDate} and end date: ${endDate}`;
  }

  async createExpense(newExpense: any): Promise<any> {
    const expense = this.expensesRepository.create(newExpense);
    this.expensesRepository.save(expense);
    return newExpense;
  }

  async updateExpense(idExpense: string, existingExpense: any): Promise<any> {
    const findExpense = this.expensesRepository.findOneBy({ id: idExpense });

    try {
      if (findExpense) {
        this.expensesRepository.update(idExpense, existingExpense);
      }
      return 'Expense Updated.';
    } catch (error) {}
  }

  async deleteExpense(idExpense: string): Promise<any> {
    const findExpense = this.expensesRepository.findOneBy({ id: idExpense });
    try {
        if(findExpense){
            this.expensesRepository.delete(idExpense)
            return `Id ${idExpense} deleted.`
        }else{
            return 'Expenses Not Found'
        }
    } catch (error) {
        throw new BadRequestException(error);
        
    }
  }
}
