import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading:boolean

  error:boolean=false
  messageError:string

  constructor(private spotify: SpotifyService) {}

 

  ngOnInit(): void {
    this.loading = true
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.nuevasCanciones = data;
    this.loading = false
    },(errorServicio) =>{
      this.error = true
      this.loading = false
      this.messageError = errorServicio.error.error.message
    });
  }
}
