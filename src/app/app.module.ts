import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule }    from '@angular/forms'
import { HttpModule, JsonpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './routing.mudule'

@NgModule({
  declarations:[
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
