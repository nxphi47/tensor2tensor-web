///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {InferenceResponse, InferenceService} from '../../services/inference.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {

  inputField: string;
  response: string;

  constructor(private inferenceService: InferenceService) {
  }

  ngOnInit() {
  }

  predict() {
    if (this.inputField === '' || this.inputField == null) {
      alert('Input field must be filled!');
      return;
    }
    this.infer(this.inputField);
  }

  infer(text) {
    this.inferenceService.infer(text)
      .subscribe(
        (res: InferenceResponse) => {
          console.log(res);
          this.response = res.response;
        },
        (error) => {
          console.log(error);
          alert('Error occured!');
        }
      )
    // this.inputField = null;
  }

}
