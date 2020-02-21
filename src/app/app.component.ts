import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Demo purpose only
  public image = {
    alt: 'Strand ohne Sand',
    title: 'Strand ohne Sand',
    src: 'https://images.unsplash.com/photo-1473805776446-12df95e07592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    srcSet: [
      'https://images.unsplash.com/photo-1473805776446-12df95e07592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80 616w',
      'https://images.unsplash.com/photo-1473805776446-12df95e07592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80 444w',
      'https://images.unsplash.com/photo-1473805776446-12df95e07592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80 718w'
    ],
    sizes: [
      '(max-width: 30em) 100vw',
      '(max-width: 50em) 50vw',
      'calc(33vw - 100px)'
    ],
    className: 'test'
  };

  public meta = {
    copyright: 'Unsplash / Photos for everyone',
    title: 'Lorem ipsum dolor sit',
    buttonLabel: 'Images',
    closeLabel: 'Close',
    backLabel: 'Back to article',
    label: 'photo gallery'
  };

  public gallery = {
    meta: this.meta,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1473805776446-12df95e07592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        title: 'Image Title 1',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      },
      {
        url: 'https://images.unsplash.com/photo-1542145748-65931190d151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        title: 'Image Title 2',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      },
      {
        url: 'https://images.unsplash.com/photo-1582148459946-2852aa3fb5ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        title: 'Image Title 3',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      },
      {
        url: 'https://images.unsplash.com/photo-1581922819941-6ab31ab79afc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        title: 'Image Title 4',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      },
      {
        url: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        title: 'Image Title 5',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      },
      {
        url: 'https://images.unsplash.com/photo-1582142689530-e0ed343bb509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Image Title 6',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      }
    ]
  };

  constructor() {
  }


  title = 'ngx gallery overlay demo';
}
