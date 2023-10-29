import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareTitleService {

  private titleNameSubject = new Subject<string>();

  titleName: string = '';

  setTitleName(title: string) {
    this.titleName = title;
    this.titleNameSubject.next(title); // Notify subscribers about the change
  }

  getTitleName() {
    return this.titleNameSubject.asObservable(); // Return observable to subscribe to changes
  }
}
