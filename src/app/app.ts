import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './core/layout/layout';

@Component({
  selector: 'app-root',
  imports: [Layout, RouterOutlet ], //RouterOutlet por algum motivo não esta funcionando aqui
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('gerenciador-financeiro');
}
