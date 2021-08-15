import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Comment } from 'src/app/models/Comment';

@Component({
  selector: 'app-add-comment-form',
  templateUrl: './add-comment-form.component.html',
  styleUrls: ['./add-comment-form.component.css']
})
export class AddCommentFormComponent implements OnInit {

  @Output() onAddComment:EventEmitter<Comment> = new EventEmitter<Comment>();
  @Output() onCancel = new EventEmitter();
  name: string = "";
  email: string = "";
  comment : string = "";

  constructor() { }
 

  ngOnInit(): void {
  }

  onSubmit(){
      if(!this.name) {
        alert('Please add your name!');
      }

      const newComment = {
        name: this.name,
        email: this.email,
        body: this.comment,
        postId: 1,
        id: 1,
      };

    this.onAddComment.emit(newComment);
    
    this.name = '';
    this.email = '';
    this.comment ='';
    }

    onClick() {
    
      this.onCancel.emit();
    }

}
