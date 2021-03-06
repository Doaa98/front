import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
    //      redirect to home if already logged in
  //   if (this.authenticationService.currentUserValue) {
  //     this.router.navigate(['/']);
  // }

  }

  ngOnInit() {

      this.loginForm = this.formBuilder.group({
          email: ['', Validators.required],
          passwordHash: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get formFields() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;

    this.authenticationService.login(this.formFields.email.value, this.formFields.passwordHash.value)
        .pipe(first())
        .subscribe({
            next: () => {
              console.log("ID = "+this.authenticationService.getUserId());
              console.log("IsLoggin = "+this.authenticationService.isLoggedIn());
              console.log("Role = "+this.authenticationService.getRole());

                // get return url from route parameters or default to '/'
                const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
                this.router.navigate([returnUrl]);
            },
            error: error => {
              alert(" ???????? ?????????? ?????????? ????????????");
                this.error = error;
                this.loading = false;
            }
        });
}

  // onSubmit() {
  //     this.submitted = true;

  //     // stop here if form is invalid
  //     if (this.loginForm.invalid) {
  //         return;
  //     }

  //     this.loading = true;
  //     this.authenticationService.login(this.formFields.email.value, this.formFields.password.value)
  //         .pipe(first())
  //         .subscribe(
  //             data => {
  //               alert("Succesfully Login")

  //                 this.router.navigate([this.returnUrl]);
  //             },
  //             error => {
  //                 this.error = error;
  //                 this.loading = false;
  //             });
  // }
}

