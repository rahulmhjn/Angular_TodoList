import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Todo } from "../models/Todo";
import { Observable } from "rxjs";

const httpOptions = {
  headers: {
    "Content-Type": "application/json",
  },
};

@Injectable({
  providedIn: "root",
})
export class TodoService {
  todosUrl: string = "https://jsonplaceholder.typicode.com/todos";
  todoLimit: string = "?_limit=5";
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todoLimit}`);
  }

  todoCompleted(todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
}
