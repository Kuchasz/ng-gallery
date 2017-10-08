import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import "./styles.scss";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from "./app.module";

platformBrowserDynamic().bootstrapModule(AppModule);
