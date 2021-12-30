import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { NotesComponent } from './components/notes/notes.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NotesComponent,
    AnnouncementComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
