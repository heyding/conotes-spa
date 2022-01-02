import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {IntroComponent} from './components/intro/intro.component';
import {NotesComponent} from './components/notes/notes.component';
import {AnnouncementComponent} from './components/announcement/announcement.component';
import {FooterComponent} from './components/footer/footer.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TextareaComponent } from './shared/textarea/textarea.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {DatePipe} from '@angular/common';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NotesComponent,
    AnnouncementComponent,
    FooterComponent,
    TextareaComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    RouterModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
