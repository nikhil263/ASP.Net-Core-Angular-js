"use strict";
var home_component_1 = require('./components/home/home.component');
var about_component_1 = require('./components/about/about.component');
var authenticationGuard_1 = require('./guards/authenticationGuard');
var canDeactivateGuard_1 = require('./guards/canDeactivateGuard');
var CanLoadGuard_1 = require('./guards/CanLoadGuard');
exports.AppRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    {
        path: 'about',
        component: about_component_1.AboutComponent,
        canActivate: [authenticationGuard_1.AuthenticationGuard],
        canDeactivate: [canDeactivateGuard_1.CanDeactivateGuard],
        canLoad: [CanLoadGuard_1.CanLoadGuard]
    }
];
//# sourceMappingURL=app.routes.js.map