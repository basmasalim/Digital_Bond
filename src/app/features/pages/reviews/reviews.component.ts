import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CornerComponent } from "../../../shared/components/corner/corner.component";

@Component({
  selector: 'app-reviews',
  imports: [CarouselModule, CornerComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
})
export class ReviewsComponent {
  reviewsItems = [
    {
      src: 'images/testimonials_01.jpg',
      name: 'Chris robertson',
      jop: 'SEO, Noticia',
      desc: 'It’s been a pure joy working with Noticia the expertise they have in unifying both content and paid and having that set up as one team means we are always optimising, not only from a content perspective, but also using data as a guiding star to take our next steps.',
    },
    {
      src: 'images/testimonials_02.jpg',
      name: 'Mick Daily',
      jop: 'Ceo Founder',
      desc: 'Pure joy working with Noticia the expertise they have in unifying both that set up as one team means we are always optimising, not only from a content star to take our next steps they have in unifying both content and paid and having that set.',
    },
    {
      src: 'images/testimonials_03.jpg',
      name: 'Dan ballard',
      jop: 'Founder',
      desc: 'the expertise they have in unifying both content and paid and having that set up as one team means we are always optimising, not only from a content perspective, but also using data as a guiding star to take our next steps.',
    },
  ];

  reviewsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    // autoplay: true,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    navSpeed: 700,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1050: {
        items: 1,
      },
    },
  };
}
