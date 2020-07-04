import { MapsComponent } from './pages/maps/maps.component';
import { ResponsibleComponent } from './info/responsible/responsible.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http'


import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';


import { ServicesService } from './shared/services.service';
import { SignupComponent } from './pages/signup/signup.component';
import { RequestHistoryComponent } from './pages/request-history/request-history.component';
import { RequestOnWaitComponent } from './pages/request-on-wait/request-on-wait.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ResponsibleComponent,
    SignupComponent,
    RequestOnWaitComponent   ,
     RequestHistoryComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [ServicesService,
              MapsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
