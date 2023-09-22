import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviepostercomponentComponent } from './moviepostercomponent/moviepostercomponent.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddformComponent } from './addform/addform.component';
import { WelcomemsgComponent } from './welcomemsg/welcomemsg.component';
import { MovielistComponent } from './movielist/movielist.component';
import { HttpClientModule } from '@angular/common/http';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { LikecomponentComponent } from './likecomponent/likecomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviepostercomponentComponent,
    AddformComponent,
    WelcomemsgComponent,
    MovielistComponent,
    EditMovieComponent,
    LikecomponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, BrowserAnimationsModule,ReactiveFormsModule,HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
