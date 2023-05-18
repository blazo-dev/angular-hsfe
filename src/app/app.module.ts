import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeopleTableComponent, ToolbarComponent } from '@shared/components';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const standAloneComponents = [ToolbarComponent, PeopleTableComponent];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...standAloneComponents,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
