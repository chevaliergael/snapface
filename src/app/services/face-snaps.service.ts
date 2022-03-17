import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService{
    faceSnaps: FaceSnap[] = [
        { 
          id: 1,
          title: "Truc Muche",
          description: "Un mec random",
          imageUrl: "https://www.placecage.com/c/400/400",
          createdDate: new Date(),
          snaps: 0,
          location: "Los Angeles"
        },
        {
          id: 2,
          title: "Une inconnue",
          description: "Une photo générée par une IA",
          imageUrl: "https://faces-img.xcdn.link/image-lorem-face-296.jpg",
          createdDate: new Date(),
          snaps: 0,
          location: "Inconnu"
        },
        {
          id: 3,
          title: "Un visage qui n'existe pas",
          description: "Un autre visage créé par une IA",
          imageUrl: "https://faces-img.xcdn.link/image-lorem-face-160.jpg",
          createdDate: new Date(),
          snaps: 0
        }
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap{
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(!faceSnap){
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}