import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormStateService {
  private formState = new BehaviorSubject<boolean>(false); // false означает, что форма закрыта
  formState$ = this.formState.asObservable();

  openForm(): void {
    this.formState.next(true);
  }

  closeForm(): void {
    this.formState.next(false);
  }

  constructor() { }
}
