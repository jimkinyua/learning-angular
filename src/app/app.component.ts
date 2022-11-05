import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  blogPosts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, vel aliquet nunc nisl euismod nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, vel aliquet nunc nisl euismod nunc.',
      loveIts: 0,
      created_at: new Date(),
      author: 'Moi',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, vel aliquet nunc nisl euismod nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, vel aliquet nunc nisl euismod nunc.',
      loveIts: 0,
      created_at: new Date(),
      author: 'Marie',
      imageUrl: 'https://picsum.photos/200/300',
    },

    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, vel aliquet nunc nisl euismod nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, vel aliquet nunc nisl euismod nunc.',
      loveIts: 0,
      created_at: new Date(),
      author: 'Moi aussi',
      imageUrl: 'https://picsum.photos/200/300',
    }
  ];

}
