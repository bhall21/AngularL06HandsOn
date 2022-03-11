import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageFormComponent } from './components/message-form/message-form.component';

@NgModule({
  declarations: [MessageFormComponent],
  exports: [MessageFormComponent],
  imports: [
    CommonModule, FormsModule
  ]
})
export class MessageFormModule { }
