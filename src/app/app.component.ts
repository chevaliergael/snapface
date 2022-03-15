import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(){
    this.mySnap = {
      title: "Truc Muche",
      description: "Un mec random",
      imageUrl: "https://www.placecage.com/c/400/400",
      createdDate: new Date(),
      snaps: 0,
      location: "Los Angeles"
    };

    this.myOtherSnap = {
      title: "Une inconnue",
      description: "Une photo générée par une IA",
      imageUrl: "https://faces-img.xcdn.link/image-lorem-face-296.jpg",
      createdDate: new Date(),
      snaps: 0,
      location: "Inconnu"
    };

    this.myLastSnap = {
      title: "Un visage qui n'existe pas",
      description: "Un autre visage créé par une IA",
      imageUrl: "https://faces-img.xcdn.link/image-lorem-face-160.jpg",
      createdDate: new Date(),
      snaps: 0
    };
  }
}
