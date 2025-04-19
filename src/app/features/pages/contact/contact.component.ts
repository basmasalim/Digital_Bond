import { Component } from '@angular/core';
import { CornerbottonComponent } from "../../../shared/components/cornerbotton/cornerbotton.component";
import { CornerTopComponent } from "../../../shared/components/corner-top/corner-top.component";

@Component({
  selector: 'app-contact',
  imports: [CornerbottonComponent, CornerTopComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactItems = [
    {
      src: 'images/icon1.png',
      title: 'Call Us',
      titleInfo1: 'New Accounts :',
      desctitleInfo1: '10-215-51322',
      titleInfo2: 'Support :',
      desctitleInfo2: '10-215-51322',
    },
    {
      src: 'images/icon2.png',
      title: 'Write Us',
      titleInfo1: '',
      desctitleInfo1: '',
      titleInfo2: '',
      desctitleInfo2: 'Bonder@digitalbondmena.com',
    },
    {
      src: 'images/icon1.png',
      title: 'Visit Us',
      titleInfo1: '',
      desctitleInfo1: '11 Ahmed Al Shatouri, Ad Dokki',
      titleInfo2: '',
      desctitleInfo2: 'Giza Governorate, Egypt',
    },
  ]
}
