import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Configuration } from './app.constants';
import { AppRoutes } from './app.routes';
import { HttpModule, JsonpModule } from '@angular/http';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DataService } from './services/dataService';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { FooterComponent } from './components/footer/footer.component';
import { AuthenticationGuard } from './guards/authenticationGuard';
import { CanDeactivateGuard } from './guards/canDeactivateGuard';
import { CanLoadGuard } from './guards/CanLoadGuard';
import { NavigationComponent } from './components/navigation/navigation.component'
import { SlimLoadingBarModule, SlimLoadingBarService } from 'ng2-slim-loading-bar';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule,
        JsonpModule,
        ToasterModule,
        SlimLoadingBarModule.forRoot()
    ],

    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        FooterComponent,
        NavigationComponent
    ],

    providers: [
        Configuration,
        DataService,
        SlimLoadingBarService,
        AuthenticationGuard,
        CanDeactivateGuard,
        CanLoadGuard
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }