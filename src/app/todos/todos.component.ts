import { fade } from './../animation';
import { SharedModule } from './../shared/shared.module';
import { Component, OnInit } from '@angular/core';
import { formatCurrency } from '@angular/common';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    fade
  ]
})

export class TodosComponent implements OnInit {
  value = '';
  items: any = ['1', '2'];

  constructor() { }

  ngOnInit(): void {
  }

  onEnter(): void {
    this.items.unshift(this.value);
    this.inputReset();
  }

  clickToDelete(item: string): string[] {
    const index: number = this.items.indexOf(item);
    return this.items.splice(index, 1);
  }

  inputReset(): string {
    return this.value = '';
  }
}
