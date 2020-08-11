import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgRemoteLoggingService } from './ng-remote-logging.service';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers : [NgRemoteLoggingService],
  exports: []
})
export class NgRemoteLoggingModule { }
