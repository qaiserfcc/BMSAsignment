import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  processingMessage = "Processing ...";
  processing = 0;
  files: any = [];
  loader = false;
  subscription: any;
  constructor(public router: Router) {
  }
  uploadFile(event) {
    if (event[0].size > 5000000) {
      alert("File size limit acceeded");
    }
    else {
      this.loader = true;
      this.processing = 0;
      const source = interval(1000);
      const text = 'Your Text Here';
      this.subscription = source.subscribe(val => {

        debugger;
        if (this.processing < 100) {
          this.processing += 20;
          this.processingMessage = "Processing " + this.processing + "%";
        }
        else {
          this.subscription.unsubscribe();
          this.loader = false;
          this.router.navigateByUrl('/skills-listing');
        }
      });
    }
  }
}
