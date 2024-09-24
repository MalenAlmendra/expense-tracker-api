import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Get()
  async listExpenses(
    @Query('lastWeek') lastWeek?: string,
    @Query('lastMonth') lastmonth?: string,
    @Query('lastThreeMonths') lastThreeMonths?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ): Promise<any> {
    try {
      if (lastWeek) {
        return await this.expensesService.listForLastWeek();
      } else if (lastmonth) {
        return await this.expensesService.listForAMonth();
      } else if (lastThreeMonths) {
        return await this.expensesService.listForThreeAMonths();
      } else if (startDate && endDate) {
        return await this.expensesService.listForACustomDate(
          startDate,
          endDate,
        );
      }
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Post()
  async createExpense(@Body() newExpense: any): Promise<any> {
    try {
      return this.expensesService.createExpense(newExpense);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Put()
  async updateExpense(@Body() existingExpense: any): Promise<any> {
    try {
      return this.expensesService.updateExpense(existingExpense);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Delete()
  async deleteExpense(@Param('idExpense') idExpense: string): Promise<any> {
    try {
      return this.expensesService.deleteExpense(idExpense);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
