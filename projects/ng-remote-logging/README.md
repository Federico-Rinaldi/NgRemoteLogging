# NgRemoteLogging

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

NgRemoteLogging is an Angular library to simplify the management of the frontend logs.  
Through this library it's possible to catch and save all frontend errors to your backend application.

# New Features!

  - Release Beta 0.0.1 - this is an Experimental version, more features coming..

### Installation

NgRemoteLogging requires [Angular](https://angular.io/) v8+ to run.

Install with npm in your project and start the server.

```sh
$ cd projectdir
$ npm install ng-remote-logging
$ ng serve
```

To install and configure in your project
in ***app.module.ts*** : 
```ts
import {NgRemoteLoggingModule} from 'ng-remote-logging';

imports: [
    NgRemoteLoggingModule
]
```
In your ***component*** inject the service and create configuration object :

```ts
import { NgRemoteLoggingConfigurator, CallTypes, NgRemoteLoggingService } from 'ng-remote-logging';


constructor(
    private remoteLog:NgRemoteLoggingService
)

public sampleFunction(){
       const obj:NgRemoteLoggingConfigurator = new NgRemoteLoggingConfigurator();
       obj.callType = CallTypes.POST;
       obj.messageToLog = 'TEST ERROR MESSAGE';
       obj.serviceUrl = `http://yourserver:5000/saveErrorMessage`;
       this.remoteLog.connectToServer(obj).subscribe(res=>{
         console.log(res);
         //res is a NgRemoteLoggingConfigurator response object
   });
}
```

#### Info, feedback and hints

Contact me [Federico Rinaldi](mailto://info@federicorinaldi.com)


#### Advice
This version is Beta and unstable, take care in your production projects.
First stable release soon!


### Todos

 - More features

License
----

[![GPLv3](https://www.gnu.org/graphics/gplv3-127x51.png)](https://www.gnu.org/licenses/gpl-3.0.html)


**Free Software, Hell Yeah!**
