import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentService } from './content.service';
import { CoreModule } from './core/core.module';

import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './themes/theme.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    AppRoutingModule,
    ThemeModule
  ],
  providers: [
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
