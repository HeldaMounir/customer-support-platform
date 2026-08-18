import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import {
  RequestPriority,
  SupportRequest,
  addRequest,
  requests,
} from '../../data/requests';

@Component({
  selector: 'app-create-request',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-request.html',
  styleUrl: './create-request.scss',
})
export class CreateRequest {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  isSubmitting = false;

  requestForm = this.fb.nonNullable.group({
    title: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ],
    ],

    description: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500),
      ],
    ],

    category: [
      'General',
      Validators.required,
    ],

    priority: [
      'medium' as RequestPriority,
      Validators.required,
    ],
  });


  get title() {
    return this.requestForm.controls.title;
  }


  get description() {
    return this.requestForm.controls.description;
  }


  get category() {
    return this.requestForm.controls.category;
  }


  get priority() {
    return this.requestForm.controls.priority;
  }


  isInvalid(
    control: typeof this.title
  ): boolean {

    return control.invalid && control.touched;
  }


  submit(): void {

    if (this.requestForm.invalid) {

      this.requestForm.markAllAsTouched();

      return;
    }

    this.isSubmitting = true;

    const formValue =
      this.requestForm.getRawValue();


    const newRequest: SupportRequest = {

      id: this.generateRequestId(),

      title: formValue.title.trim(),

      description:
        formValue.description.trim(),

      status: 'open',

      priority: formValue.priority,

      category: formValue.category,

      createdAt:
        new Date().toISOString(),

      updatedAt:
        new Date().toISOString(),
    };


    addRequest(newRequest);


    setTimeout(() => {

      this.isSubmitting = false;

      this.router.navigate([
        '/requests',
      ]);

    }, 300);
  }


  cancel(): void {

    this.router.navigate([
      '/requests',
    ]);
  }


  private generateRequestId(): string {

    const numbers = requests
      .map((request) =>
        Number(
          request.id.replace('REQ-', '')
        )
      )
      .filter((number) =>
        !Number.isNaN(number)
      );

    const highest =
      numbers.length
        ? Math.max(...numbers)
        : 1000;

    return `REQ-${highest + 1}`;
  }
}