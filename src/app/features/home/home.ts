import { Component, signal } from '@angular/core';
import { Balance } from "./components/balance/balance";
import { TransactionItem } from "./components/transaction-item/transaction-item";
import { Transaction } from '../../shared/transaction/interfaces/transaction';
import { TransactionType } from '../../shared/transaction/enums/transaction-type';
import { NoTransactions } from "./components/no-transactions/no-transactions";

@Component({
  selector: 'app-home',
  imports: [Balance, TransactionItem, NoTransactions],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  transactions = signal<Transaction[]>([
    {title: 'Teste',value: 500, type: TransactionType.INCOME},
    {title: 'Teste',value: 200, type: TransactionType.OUTCOME},
    {title: 'Teste',value: 300, type: TransactionType.INCOME},
    {title: 'Teste',value: 100, type: TransactionType.OUTCOME},  
    {title: 'Teste',value: 500, type: TransactionType.OUTCOME}
  ])
}
