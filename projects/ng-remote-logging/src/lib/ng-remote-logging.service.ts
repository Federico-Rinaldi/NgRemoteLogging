import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { NgRemoteLoggingConfigurator } from './ng-remote-logging.model';
import { CallTypes } from './ng-remote-logging.enums';
import { LoggingStatus } from './ng-remote-logging.status.model';
/**
 * NgRemoteLoggingService
 * 
 * Service to manage Http client call to a server
 * to save on rest backend angular frontend log.
 * 
 * Create on backend a JSON object same as NgRemoteLoggingConfigurator
 * to appreciate the power of this library
 * 
 * For GET call set in serviceUrl property the entire request url ex : http://localhost:5000?message=
 * in this case the library attach at the end of this string messageToLog.
 * 
 * @author 'Federico Rinaldi'
 * @copyright 'Federico Rinaldi 2020'
 * @license 'GPL' 
 * @version 1.0
 */
@Injectable({
  providedIn: 'root'
})
export class NgRemoteLoggingService {

  constructor(private http:HttpClient) { }


  /**
   * connectToServer 
   * @param obj @type NgRemoteLoggingConfigurator
   * @returns Observable<NgRemoteLoggingConfigurator>
   * 
   */
    public connectToServer(obj:NgRemoteLoggingConfigurator):Observable<NgRemoteLoggingConfigurator> {
      try{
        if(obj.callType === CallTypes.POST){
          return this.http.post<NgRemoteLoggingConfigurator>(obj.serviceUrl,obj);
        }else if(obj.callType === CallTypes.GET){
          return this.http.get<NgRemoteLoggingConfigurator>(`${obj.serviceUrl}${obj.messageToLog}`);
        }else{
          obj.status = this.createErrorTypeStatus();
          return of(obj);
        }
      }catch(e){
        obj.status = this.createErrorHttpCall((<Error>e).message);
        return of(obj);
      } 
    }


   private createErrorTypeStatus():LoggingStatus {

      const status:LoggingStatus = {} as LoggingStatus;
      status.errorType='500';
      status.isError = true;
      status.message = 'Unable to perform http call, check your CallTypes';
      return status;

      
    }

    private createErrorHttpCall(message:string):LoggingStatus {

      const status:LoggingStatus = {} as LoggingStatus;
      status.errorType='500';
      status.isError = true;
      status.message = `Unable to perform http call, more infos : ${message}`;
      return status;

      
    }
}
