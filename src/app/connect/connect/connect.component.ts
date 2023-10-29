import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent {

  formData: any = {};

  constructor(private http: HttpClient) {}

  submitForm() {
    const formUrl = 'https://script.google.com/macros/s/AKfycbxYUw73w2bRK4z689Fpymdk_CexvMh0BnGKHqaxJTBVLRGP2IJQNFXNZTAca52NYBcG/exec';

    this.http.post(formUrl, this.formData)
      .subscribe(() => {
        alert("Thanks! I'll get back to you ASAP!");
        this.formData = {};
      }, error => {
        console.error('Error:', error);
      });
  }

}
