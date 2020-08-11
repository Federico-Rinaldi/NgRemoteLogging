/**
 * LoggingStatus
 * 
 * @param isError 'boolean true if errors is happened'
 * @param errorType 'Type of error ex: Http Error code'
 * @param message 'Error message'
 * 
 * @author 'Federico Rinaldi'
 * @copyright 'Federico Rinaldi 2020'
 * @license 'GPL' 
 * @version 1.0
 */
export interface LoggingStatus {

    isError:boolean;
    errorType:string;
    message:string;
}