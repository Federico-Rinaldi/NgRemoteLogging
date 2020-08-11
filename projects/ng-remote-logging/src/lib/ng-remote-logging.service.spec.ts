import { TestBed, async, inject } from '@angular/core/testing';

import { NgRemoteLoggingService } from './ng-remote-logging.service';
import { NgRemoteLoggingConfigurator } from './ng-remote-logging.model';
import { CallTypes } from './ng-remote-logging.enums';
import { LoggingStatus } from './ng-remote-logging.status.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';



describe('NgRemoteLoggingService', () => {
  let service: NgRemoteLoggingService;
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({providers : [NgRemoteLoggingService],imports : [HttpClientTestingModule]});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = TestBed.inject(NgRemoteLoggingService);
  });

  it('should be created', () => {
    service = TestBed.get(NgRemoteLoggingService);
    expect(service).toBeTruthy();
  });

  it('should return NgRemoteLoggingService obj with response code', async ()=> {
    const fakeObj:NgRemoteLoggingConfigurator = new NgRemoteLoggingConfigurator();
    let statusExpected:boolean = false;
    let resultObj:NgRemoteLoggingConfigurator = new NgRemoteLoggingConfigurator();
    fakeObj.callType = CallTypes.POST;
    fakeObj.messageToLog = 'Test for logging message';
    fakeObj.serviceUrl = 'https://my-json-server.typicode.com/Federico-Rinaldi/FakeJsonServer';
    const result = service.connectToServer(fakeObj).toPromise();
    await result.then(r=>{
      statusExpected =  r.status.isError;
    });
    Promise.resolve(true);
    expect(statusExpected).toEqual(true);
   
  });
});
