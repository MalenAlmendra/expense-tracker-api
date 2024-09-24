import { Module } from '@nestjs/common';
import { ExpensesController } from './expenses/expenses.controller';
import { ExpensesModule } from './expenses/expenses.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ExpensesModule, AuthModule, UsersModule],
  controllers: [ExpensesController, UsersController],
})
export class AppModule {}
