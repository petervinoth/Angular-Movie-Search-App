import { Component, OnInit ,Input} from '@angular/core';
import { Movie } from '../movie.model';


@Component({
  selector: 'app-movie',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {

 

 @Input() movie:Movie

 }


