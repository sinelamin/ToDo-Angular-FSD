import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap, interval, switchMap } from 'rxjs';

import { TaskInterface } from '../entities/taskInterface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private http: HttpClient
  ) {
    interval(30000)  // Периодический опрос каждые 30 секунд
      .pipe(
        switchMap(() => this.getTasks())
      )
      .subscribe();
  }

  private tasksSubject = new BehaviorSubject<TaskInterface[]>([]);

  tasks$ = this.tasksSubject.asObservable();

  url = 'http://localhost:1337/api/categories';

  getTasks(): Observable<TaskInterface[]> {
    return this.http.get<any>(this.url).pipe(
      map((data: any) => {
        let dataList = data['data'];
        return dataList.map((task: any) =>  {
          const combinedObj = {...task['attributes'], id: task['id']}
          return combinedObj;
        });
      }),
      tap((tasks: TaskInterface[]) => {
        this.tasksSubject.next(tasks);
      })
    );
  }

  addTask(task: TaskInterface) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIwNDQzOTg3LCJleHAiOjE3MjMwMzU5ODd9.JnFQj6aUOPSUMQ1PlopXHaVGr14WCh3BKXuVqxNptsE`
    });

    const data = {
      data: task
    }

    return this.http.post(this.url, JSON.stringify(data), { headers })
  }


  deleteTask(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIwNDQzOTg3LCJleHAiOjE3MjMwMzU5ODd9.JnFQj6aUOPSUMQ1PlopXHaVGr14WCh3BKXuVqxNptsE`
    });
    return this.http.delete(`${this.url}/${id}`, { headers })
  }
}
