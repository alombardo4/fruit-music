import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare const MusicKit;

if (environment.production) {
  enableProdMode();
}

const node = document.createElement('script');
node.src = 'https://js-cdn.music.apple.com/musickit/v1/musickit.js';
node.type = 'text/javascript';
node.async = false;
node.charset = 'utf-8';
document.getElementsByTagName('head')[0].appendChild(node);

document.addEventListener('musickitloaded', () => {
  MusicKit.configure({
    developerToken: "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkI0RzVITjYyODcifQ.eyJpYXQiOjE1MjgzMzA5ODEsImV4cCI6MTU0Mzg4Mjk4MSwiaXNzIjoiNDhVTTlUODcyMyJ9._6emv-WPVQyzDlsHocsDk97YdYfGSNbanZBRuel6gKkhoLjwMQ31qnsgo5WmWMdiUMkPH5ShVQ2si4EMQHHTiw",
    app: {
      name: 'Fruit Music',
      build: '1.0.0-b1'
    },
    bitrate: 256
  });
  
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
});

