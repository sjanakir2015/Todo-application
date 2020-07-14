import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project Bird';
  toDoValue: string;
  list: Todo[];
  editMode = false;
  id: number = 0;
  
  ngOnInit() {
    this.list = [];
    this.toDoValue = "";
  }
  addToDo() {
    if(this.toDoValue !== ""){
      const newItem: Todo = {
        id: this.id++,
        value: this.toDoValue,
        isDone: false,
        editMode: false
      };
      this.list.push(newItem);
  }
  this.toDoValue = "";
}
deleteTodo(id:number){
this.list = this.list.filter(item => item.id !== id);
}
saveTodo(list){
 const updatedIndex = this.list.findIndex(obj => obj.id === list.id);
 list.editMode = false;
 this.list[updatedIndex] = list;
}
editValue(todo){
  todo.editMode=true;
}
}
