import { Component } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  
  modalDisplay: string = 'none';

  openModal() {
    this.modalDisplay = 'block';
  }

  closeModal(event: Event) {
    if (event.target === event.currentTarget) {
      this.modalDisplay = 'none';
    }
  }
}
