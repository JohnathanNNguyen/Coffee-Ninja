import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email-subbed',
  templateUrl: './email-subbed.component.html',
  styleUrls: ['./email-subbed.component.scss']
})
export class EmailSubbedComponent implements OnInit {
  email;
  constructor(private route: ActivatedRoute) {
    this.email = route.snapshot.queryParams.email
  }

  ngOnInit(): void {
  }

}
