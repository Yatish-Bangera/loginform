import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit {
  userdata: any = [];
  random: any;
  check: boolean;

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required,Validators.minLength(2)]),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])

  });
  get firstName() { return this.form.get('firstName'); }
  get lastName() { return this.form.get('lastName'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }



  constructor(private http: HttpService) {
  }
  ngOnInit() {
  }
  onSubmit() {
    this.http.sendData(JSON.stringify(this.form.getRawValue()));
    this.form.reset();
  }

}
