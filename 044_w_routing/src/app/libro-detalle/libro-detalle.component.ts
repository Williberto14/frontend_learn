import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Libro } from '../libro.model';
import { LIBROS } from '../mocks';

@Component({
  selector: 'app-libro-detalle',
  templateUrl: './libro-detalle.component.html',
  styleUrls: ['./libro-detalle.component.css'],
})
export class LibroDetalleComponent implements OnInit {
  libro: Libro = {
    id: 0,
    titulo: '',
    autor: '',
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {

      let id = +params.get('id')!;
      this.libro = LIBROS.find((item) => item.id === id)!;

    });
  }
}
