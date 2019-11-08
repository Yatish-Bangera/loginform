import { ActivatedRoute } from '@angular/router';
import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { NameEditorComponent } from '../name-editor/name-editor.component';
import { Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-gettable',
  templateUrl: './gettable.component.html',
  styleUrls: ['./gettable.component.scss']
})
export class GettableComponent implements OnInit {
  userdata: any;
  check: boolean;
  id: number;
  formData: any;
  modalOpen: boolean;
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])

  });
  constructor(private http: HttpService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.onget();
  }
  onget() {
    this.http.get_products().subscribe(
      (arg: any) => {
        this.userdata = arg;
        console.log(this.userdata);
      }
    );
    this.check = true;
  }

  // ondelete(id: number) {
  //   this.http.delete(id).subscribe(res => {
  //     this.onget();
  //   });
  // }
  ondelete(xyz: any) {
    // this.id = this.userdata.params.id;
    this.http.delete(xyz).subscribe(() => this.onget());
    console.log(" success ");
  }

  onmodal(id: number) {
    this.formData = id;
    console.log(this.formData.id);
    this.modalOpen = true;
    this.form.get('firstName').patchValue(this.formData.firstName)
    this.form.get('lastName').patchValue(this.formData.lastName)
    this.form.get('email').patchValue(this.formData.email)
    this.form.get('password').patchValue(this.formData.password)
  }

  close() {
    this.modalOpen = false;

  }

  onupdate(idNo: number) {
    idNo = this.formData.id;
    const data = JSON.stringify(this.form.getRawValue());
    this.http.update(data, idNo)
      .subscribe(
        (res: any) => {
          console.log(res);
         this.onget();

        }, (error: any) => {
          console.log(error);
        }
      );

    this.form.reset();
    this.modalOpen = false;

  }
}
