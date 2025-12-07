import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAnchor, MatButtonModule } from "@angular/material/button";
import { MatButtonToggleGroup, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TransactionType } from '../../../../shared/transaction/enums/transaction-type';
import { NgxMaskDirective } from "ngx-mask";
import { TransactionsService } from '../../../../shared/transaction/services/transactions.service';
import { TransactionPayload } from '../../../../shared/transaction/interfaces/transaction';

@Component({
  selector: 'app-create',
  imports: [
    MatFormFieldModule, MatInputModule,
    ReactiveFormsModule, JsonPipe,
    MatAnchor, MatButtonModule,
    MatButtonToggleGroup, MatButtonToggleModule,
    NgxMaskDirective
],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  private transactionService = inject(TransactionsService);
  
  readonly transactionTypes = TransactionType;

  form = new FormGroup({
    type: new FormControl('', {
      validators: [
        Validators.required
      ]
    }),
    title: new FormControl('', {
      validators: [
        Validators.required
      ]
    }),
    value: new FormControl(0, {
      validators: [
        Validators.required
      ]
    }),
  });

  submit(){
    if(this.form.invalid){
      return;
    }

    const payload: TransactionPayload = {
      title: this.form.value.title as string,
      type: this.form.value.type as TransactionType,
      value: this.form.value.value as number,
    }

    this.transactionService.post(payload).subscribe({
      next: () => {
        
      }
    })
  }
}
