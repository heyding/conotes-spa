import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

  dismiss: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  dismissAnnouncement(): void {
    this.dismiss = true;
  }


}
