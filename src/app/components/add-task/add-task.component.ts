import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Tarefa } from '../../../Tarefa';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, ButtonComponent, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter<Tarefa>();

tarefa: string = '';
categoria: string = '';
concluido: boolean = false;
showAddTask: boolean = false;

public chooseView(valor: boolean) {
  this.showAddTask = valor;
}

onSubmit(){
  if(!this.tarefa) {
    alert('Adicione uma tarefa!')
    return;
  }

  const newTask = {
    tarefa: this.tarefa,
    categoria: this.categoria,
    concluido: this.concluido
  }

  this.onAddTask.emit(newTask);

  this.tarefa = '';
  this.categoria = '';
  this.concluido = false;

}
}
