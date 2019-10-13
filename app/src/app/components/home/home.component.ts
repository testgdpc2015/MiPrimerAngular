import { Component, OnInit } from '@angular/core';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private prueba : PruebaService
  ) { }

  ngOnInit() {
    this.getAlbum();
  }

  getAlbum (){
    this.prueba.getAlbum().subscribe(response => console.log(response));

  }

}
