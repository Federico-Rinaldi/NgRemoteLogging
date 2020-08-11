import { LoggingStatus } from "./ng-remote-logging.status.model";
import { CallTypes } from "./ng-remote-logging.enums";
/**
 * NgRemoteLoggingConfigurator
 * 
 * @param callType 'Kind of http call, ex : POST || GET'
 * @param messageToLog 'String that describes loggable message'
 * @param status 'Return Status of http call'
 * @param loggingDate 'If status code is OK loggingDate contains http call timestamp'
 * @param serviceUrl 'The url of a backend service for logging' 
 * 
 * @author 'Federico Rinaldi'
 * @copyright 'Federico Rinaldi 2020'
 * @license 'GPL' 
 * @version 1.0
 */
export class NgRemoteLoggingConfigurator {


    constructor(){}

    callType:CallTypes;
    messageToLog:string;
    status:LoggingStatus;
    loggingDate:Date;
    serviceUrl:string;

}