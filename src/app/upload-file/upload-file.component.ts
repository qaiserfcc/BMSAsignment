import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {

  files: any = [];
  loader = false;
  constructor(public router : Router) {
  }
  uploadFile(event) {
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
      this.router.navigate(['/listing']);
    }, 5000);
  }
}
