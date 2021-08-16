import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showCommentSection: boolean = true;
  private subject = new Subject<any>();

  toogleShowCommentSection() : void {
    this.showCommentSection = !this.showCommentSection;
    this.subject.next(this.showCommentSection)
  }

  onToggle() : Observable<any> {
    return this.subject.asObservable();
  }

  constructor() { }
}
