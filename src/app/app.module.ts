import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { Routes, ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const approutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post', component: PostsComponent },
  { path: 'post-details/:id', component: PostsDetailsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    PostsDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
