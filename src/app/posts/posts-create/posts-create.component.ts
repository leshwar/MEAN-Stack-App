import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})

export class PostCreateComponent {

  titleValue = '';
  contentValue = '';
  postCreated = new EventEmitter();

  onSavePost() {
    alert(this.titleValue);
    alert(this.contentValue);
    const post = {
      title: this.titleValue,
      content: this.contentValue
    };
    this.postCreated.emit(post);
  }
}
