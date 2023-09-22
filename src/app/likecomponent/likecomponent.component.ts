import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-likecomponent',
  templateUrl: './likecomponent.component.html',
  styleUrls: ['./likecomponent.component.css']
})
export class LikecomponentComponent {
  @Input() likeCount:number=0;
  @Input() disLikeCount:number=0;
  hidden='true';
  hidden1='true';
  @Output() updateLike = new EventEmitter<number>();
  @Output() updateDislike = new EventEmitter<number>();
  increment(){
    this.likeCount++;
    this.hidden ='false';
    this.updateLike.emit(this.likeCount);
   }
   decrement(){
    this.disLikeCount++;
    this.hidden1 ='false';
    this.updateDislike.emit(this.disLikeCount);
   }
}
