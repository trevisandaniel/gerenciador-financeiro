import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAnchor, MatButtonModule } from "@angular/material/button";
import { MatButtonToggleGroup, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TransactionType } from '../../../../shared/transaction/enums/transaction-type';

@Component({
  selector: 'app-create',
  imports: [
    MatFormFieldModule, MatInputModule,
    ReactiveFormsModule, JsonPipe,
    MatAnchor, MatButtonModule, 
    MatButtonToggleGroup, MatButtonToggleModule
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
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
    value: new FormControl('', {
      validators: [
        Validators.required
      ]
    }),
  })
}
