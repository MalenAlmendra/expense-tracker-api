import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expenses } from './entities/expenses.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Expenses])],
  controllers:[ExpensesController],
  providers: [ExpensesService],
  exports:[ExpensesService]
})
export class ExpensesModule {}
