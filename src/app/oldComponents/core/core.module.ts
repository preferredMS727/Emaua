import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { BannerComponent } from './components/banner/banner.component';
import { SmallBannersComponent } from './components/small-banners/small-banners.component';
import { SharedModule } from '../shared/shared.module';
import { AreasService } from './services/area.view.service';
import { SearchResultViewService } from './services/search.result.view.service';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { SidebarModule } from 'ng-sidebar';
import { AboutComponent } from 'src/app/about/about.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    BannerComponent,
    SmallBannersComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SidebarModule.forRoot()
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    BannerComponent,
    SmallBannersComponent,
    AboutComponent,
    SharedModule
  ],
  providers: [
    AreasService,
    SearchResultViewService,
  ]
})
export class CoreModule { }
