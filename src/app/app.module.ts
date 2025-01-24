import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyappComponent } from './myapp/myapp.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TestLocalapiComponent } from './myapp/test-localapi/test-localapi.component';
const routes: Routes = [
  { path: '', component: MyappComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    MyappComponent,
    TestLocalapiComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[RouterModule],
  providers: [
    provideClientHydration(), 
    provideHttpClient(withFetch()) 
  ],
  bootstrap: [AppComponent,MyappComponent,TestLocalapiComponent]
})
export class AppModule { }
