// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverUrl: 'http://localhost:3000',
  accesChannels: {
    jsp1: ['Jsp1', 'admin', 'superAdmin'],
    jsp2: ['Jsp2', 'admin', 'superAdmin'],
    jsp3: ['Jsp3', 'admin', 'superAdmin'],
    jsp4: ['Jsp4', 'admin', 'superAdmin'],
    admin: ['admin', 'superAdmin'],
    superAdmin: ['superAdmin'],
  },
  accesWriteChannels: {
    jsp1: ['Jsp1', 'admin', 'superAdmin'],
    jsp2: ['Jsp2', 'admin', 'superAdmin'],
    jsp3: ['Jsp3', 'admin', 'superAdmin'],
    jsp4: ['Jsp4', 'admin', 'superAdmin'],
    question: ['Jsp1', 'Jsp2', 'Jsp3', 'Jsp4', 'admin', 'superAdmin'],
    commun: ['admin', 'superAdmin'],
  },
};

export interface Environment {
  production: boolean;
  serverUrl: string;
  accesChannels: {
    jsp1: string[],
    jsp2: string[],
    jsp3: string[],
    jsp4: string[],
    admin: string[],
    superAdmin: string[],
  };
  accesWriteChannels: {
    jsp1: string[],
    jsp2: string[],
    jsp3: string[],
    jsp4: string[],
    commun: string[],
    question: string[],
  };
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
