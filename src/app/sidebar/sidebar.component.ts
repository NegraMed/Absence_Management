import { MapsComponent } from './../pages/maps/maps.component';
import { Component, OnInit } from '@angular/core';



export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
@Component({
    moduleId: module.id,
    // tslint:disable-next-line: component-selector
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    public mapscomponent: MapsComponent;
    x: number ;
    role: any;
    isShow: boolean;
    
    ngOnInit() {

        this.role = localStorage.getItem('role');
        console.log(this.role);
         /*this.role = this.mapscomponent.getRole();
        if (this.role === ' responsible ') {
            this.x = 5 ;
        } else { this.x = 1 ; }
        */

        if (this.role === 'responsible' ) {
            this.isShow = false;
        // tslint:disable-next-line: no-use-before-declare
        this.menuItems = ROUTES.filter(menuItem => (ROUTES));
    // tslint:disable-next-line: no-use-before-declare
    } else if (this.role === 'employee' ) {this.isShow = false; this.menuItems = ROUTES2.filter(menuItem => (ROUTES2)); }
    // tslint:disable-next-line: no-use-before-declare
    else if (this.role === 'visitor' ) {this.menuItems = ROUTES3.filter(menuItem => (ROUTES3)); this.isShow = true; }

    }
}
/*
Routes: for responsible routing
routes2: for employee routing
routes3: for a visitor of the website
*/

export let ROUTES: RouteInfo[] = [];

    ROUTES = [
    { path: '/dashboard',     title: 'Dashboard',         icon: 'nc-bank',           class: '' },
    { path: '/requests',         title: 'requests',             icon: 'nc-diamond',        class: '' },
    { path: '/profile',          title: 'User Profile',      icon: 'nc-single-02',      class: '' },
    { path: '/employees',         title: 'your Employees',    icon: 'nc-tile-56',        class: '' },

];
export let ROUTES2: RouteInfo[] = [];
    ROUTES2 = [
        { path: '/Profile',    title: 'update profile',          icon: 'nc-single-02',     class: '' },
        { path: '/Requests',    title: 'Send Request ',          icon: 'nc-send',     class: '' },
        { path: '/RequestOnWait',    title: 'Requests On Wait',          icon: 'nc-button-pause',     class: '' },
        { path: '/RequestHistory',    title: 'History Of Requests',          icon: 'nc-single-copy-04',     class: '' },
       

    ];
    export let ROUTES3: RouteInfo[] = [];
    ROUTES3 = [ ];




