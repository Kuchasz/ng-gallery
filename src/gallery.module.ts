import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryService } from './service/gallery.service';
import { GalleryConfig } from './config/gallery.config';

import { GalleryComponent } from './component/gallery/gallery.component';
import { GalleryNavComponent } from './component/gallery-nav/gallery-nav.component';
import { GalleryThumbComponent } from './component/gallery-thumb/gallery-thumb.component';
import { GalleryStateComponent } from './component/gallery-state/gallery-state.component';
import { GalleryImageComponent } from './component/gallery-image/gallery-image.component';
import { GalleryLoaderComponent } from './component/gallery-loader/gallery-loader.component';
import { GalleryBulletsComponent } from './component/gallery-bullets/gallery-bullets.component';
import { GalleryPlayerComponent } from './component/gallery-player/gallery-player.component';
import { GalleryMainComponent } from './component/gallery-main/gallery-main.component';
import { GalleryChosenImagesComponent } from './component/gallery-chosen-images/gallery-chosen-images.component';

import { LazyDirective } from './directive/lazy.directive';
import { TapDirective } from './directive/tap.directive';
import {GalleryDirectoriesComponent} from "./component/gallery-directories/gallery-directories.component";

/** Initialize ConfigService with URL */
export function galleryFactory(config: GalleryConfig) {
  return new GalleryService(config);
}

export const CONFIG = new InjectionToken<GalleryConfig>('config');

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GalleryComponent,
    GalleryNavComponent,
    GalleryThumbComponent,
    GalleryStateComponent,
    GalleryImageComponent,
    GalleryLoaderComponent,
    GalleryBulletsComponent,
    GalleryPlayerComponent,
    GalleryDirectoriesComponent,
    GalleryMainComponent,
    GalleryChosenImagesComponent,
    TapDirective,
    LazyDirective
  ],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule {
  static forRoot(config?: GalleryConfig): ModuleWithProviders {

    return {
      ngModule: GalleryModule,
      providers: [
        { provide: CONFIG, useValue: config },
        {
          provide: GalleryService,
          useFactory: galleryFactory,
          deps: [CONFIG]
        }
      ]
    };
  }
}

