import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css'],
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  loading: boolean;
  topTracks:any[]=[]

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe((params) => {
      console.log(params['id']);
      this.getArtista(params['id']);
      this.getTopTracks(params['id'])
    });
  }

  ngOnInit(): void {}

  getArtista(id: string) {
    this.spotify.getArtista(id).subscribe((res) => {
      this.artista = res;
      this.loading = false;
    });
  }

  getTopTracks(id:string){
  this.spotify.getTopTracks(id).subscribe((res) =>{
    this.topTracks = res
    console.log(res)
  })
  }
}
