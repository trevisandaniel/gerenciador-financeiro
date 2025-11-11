import { Component, inject, OnInit, signal } from '@angular/core';
import { Transaction } from '../../shared/transaction/interfaces/transaction';
import { TransactionsService } from '../../shared/transaction/services/transactions';
import { Balance } from "./components/balance/balance";
import { NoTransactions } from "./components/no-transactions/no-transactions";
import { TransactionItem } from "./components/transaction-item/transaction-item";

@Component({
  selector: 'app-home',
  imports: [Balance, TransactionItem, NoTransactions],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  private transactionsService = inject(TransactionsService);

  transactions = signal<Transaction[]>([]);

  ngOnInit(): void {
    this.getTransactions();
  }



  private getTransactions() {
    this.transactionsService.getAll().subscribe({
      next: (transactions) => {
        this.transactions.set(transactions);
      }
    });
  }
}
