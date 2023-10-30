import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  connectForm!: FormGroup;
  showModal = false;

  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.connectForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', { validators: [Validators.required, Validators.email] }),
      message: new FormControl('', [Validators.required])
    })
  }

  submitForm() {
    this.showModal = true;
    if (this.modalComponent) {
      this.modalComponent.openModal();
    }
    this.resetForm()
    // const formUrl = 'https://script.google.com/macros/s/AKfycbxYUw73w2bRK4z689Fpymdk_CexvMh0BnGKHqaxJTBVLRGP2IJQNFXNZTAca52NYBcG/exec';
    // this.http.post(formUrl, this.connectForm.value)
    //   .subscribe(() => {
    //     alert("Thanks! I'll get back to you ASAP!");
    //     this.resetForm()
    //   }, error => {
    //     console.error('Error:', error);
    //   });
  }

  resetForm() {
    this.connectForm.reset();
  }

}
