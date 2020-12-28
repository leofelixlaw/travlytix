import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import * as $ from 'jquery';

@Component({
  selector: 'tix-demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      company: ['', Validators.required],
      message: ['']
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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';

    const message = {
      text: `<!channel> *Our new client*`,
      mrkdwn: true,
      attachments: [
        {
          color: '#2eb886',
          fields: [{
            title: 'First Name',
            value: this.registerForm.value.firstName
          },
          {
            title: 'Last Name',
            value: this.registerForm.value.lastName
          },
          {
            title: 'Email',
            value: this.registerForm.value.email
          },
          {
            title: 'Phone',
            value: this.registerForm.value.phone
          },
          {
            title: 'Company',
            value: this.registerForm.value.company
          }]
        }
      ]
    };
    if (this.registerForm.value.message) {
      message.attachments[0].fields.push({ title: 'Message', value: this.registerForm.value.message});
    }
    if (this.registerForm.valid) {
      $.post(SLACK_WEBHOOK_URL, JSON.stringify(message), (data) => {
        console.log(data);
        this.router.navigate(['/success']);
      });
      this.httpClient
        .post<any>(SLACK_WEBHOOK_URL, message)
        .pipe(
          tap(_ => console.log('Sent successfull'))
        );
    }
  }

}
