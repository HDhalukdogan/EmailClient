import { EmailService } from './../email.service';
import { AuthService } from './../../auth/auth.service';
import { Email } from './../email';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email: Email;

  constructor(private authService: AuthService, private emailService: EmailService) {
    this.email = {
      id: '',
      to: '',
      subject: '',
      html: '',
      text: '',
      from: `${authService.username}@angular-email.com`

    }
  }

  ngOnInit(): void {
  }

  onSubmit(email: Email){
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }

}
