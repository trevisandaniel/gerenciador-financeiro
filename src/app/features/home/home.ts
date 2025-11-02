import { Component, signal } from '@angular/core';
import { Balance } from "./components/balance/balance";
import { TransactionItem } from "./components/transaction-item/transaction-item";
import { Transaction } from '../../shared/transaction/interfaces/transaction';
import { TransactionType } from '../../shared/transaction/enums/transaction-type';

@Component({
  selector: 'app-home',
  imports: [Balance, TransactionItem],
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
