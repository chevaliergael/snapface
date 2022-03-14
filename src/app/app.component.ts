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
    this.mySnap = new FaceSnap(
      "Truc Muche",
      "Un mec random",
      "https://www.placecage.com/c/400/400",
      new Date(),
      0
    );
    this.myOtherSnap = new FaceSnap(
      "Une inconnue",
      "Une photo générée par une IA",
      "https://faces-img.xcdn.link/image-lorem-face-296.jpg",
      new Date(),
      0
    )
    this.myLastSnap = new FaceSnap(
      "Un visage qui n'existe pas",
      "Un autre visage créé par une IA",
      "https://faces-img.xcdn.link/image-lorem-face-160.jpg",
      new Date(),
      0
    )
  }
}
