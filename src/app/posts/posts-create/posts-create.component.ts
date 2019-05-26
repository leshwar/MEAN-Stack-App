import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})

export class PostCreateComponent {

  entertedValue = ''

  onAddPost() {
    alert(this.entertedValue);
    alert("Save Post Clicked");
  }
}
