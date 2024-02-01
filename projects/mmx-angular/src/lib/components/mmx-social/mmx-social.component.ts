import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import $ from 'jquery';
@Component({
  selector: 'mmx-social',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './mmx-social.component.html',
  styleUrl: './mmx-social.component.scss'
})
export class MmxSocialComponent implements OnInit{
  public submitted = false;
	public error:boolean = false;
  public invalid:boolean = false;
  public emailControl = new FormControl('', [
		Validators.required,
		Validators.email,
	]);

  public newsletterForm!:FormGroup;


  ngOnInit(): void {
    this.newsletterForm = new FormGroup({
      email: this.emailControl,
    });
  }

  public onSocialToggle(event: any) {
    $('#social-discover').toggle();
    if($('#social-list').is(':visible')) {
      $('#social-list').removeClass('flex');
      $('#social-list a').hide();
    } else {
      $('#social-list').addClass('flex');
      for(let i=0; i<$('#social-list a').length; i++) {
        setTimeout(() => {
          $('#social-list a').eq(i).show();
        }, 100*i);
      }
    }
    event.preventDefault();
  }

}
