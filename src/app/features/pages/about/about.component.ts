import { Component } from '@angular/core';
import { VerticalLineComponent } from "../../../shared/components/vertical-line/vertical-line.component";
import { TextBlockWithLineComponent } from '../../../shared/components/text-block-with-line/text-block-with-line.component';

@Component({
  selector: 'app-about',
  imports: [TextBlockWithLineComponent, VerticalLineComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutItems = [
    {
      src: 'images/service_icon_1-1.png',
      title: 'Social Media',
      desc: 'Grow your presence across all social media platforms.',
    },
    {
      src: 'images/service_icon_2-1.png',
      title: 'Web Development',
      desc: 'Modern, responsive websites tailored to your needs.',
    },
    {
      src: 'images/service_icon_3-1.png',
      title: 'Mobile Apps',
      desc: 'Build native and cross-platform mobile applications.',
    },
    {
      src: 'images/service_icon_4-1.png',
      title: 'SEO Optimization',
      desc: 'Boost your website visibility in search engine results.',
    },
    {
      src: 'images/service_icon_5-1.png',
      title: 'Influencers Marketing',
      desc: 'Partner with influencers to grow your brand reach.',
    },
    {
      src: 'images/service_icon_6-1.png',
      title: 'SMS Campaigns',
      desc: 'Engage your customers with targeted SMS campaigns.',
    },
  ];
}
