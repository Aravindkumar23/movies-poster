import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-moviepostercomponent',
  templateUrl: './moviepostercomponent.component.html',
  styleUrls: ['./moviepostercomponent.component.css']
})
export class MoviepostercomponentComponent {
 @Input() src = "image";
 @Input() alt ="alternate";
 @Input()  movietitle="title";
 @Input()  moviereleaseyr="year";
 @Input() category ="category";
 @Input() movielength ="movielength";
 @Input() content ="content";


}
