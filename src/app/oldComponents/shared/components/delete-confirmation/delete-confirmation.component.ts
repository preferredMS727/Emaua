import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent {



  get title(): string {
    return '';
  }

  get imageUrl(): string {
    return 'assets/img/no-img.png';
  }

  get message(): string {
    return '';
  }

  constructor(
    private router: Router) {


  }

  deleteConfirm(id: any, c: (msg: string) => void): void {
  }

  deleteCancel(id: any, d: (msg: string) => void): void {
  }
}