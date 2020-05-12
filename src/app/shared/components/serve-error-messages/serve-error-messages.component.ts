import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-serve-error-messages',
  templateUrl: './serve-error-messages.component.html',
  styleUrls: ['./serve-error-messages.component.css']
})
export class ServeErrorMessagesComponent implements OnInit {

  @Input('server-error-messages') serverErrorMessages: string[] = null;

  constructor() { }

  ngOnInit() {
  }

}
