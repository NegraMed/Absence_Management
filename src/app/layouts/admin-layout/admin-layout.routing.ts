


import { Routes } from '@angular/router';


import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { RequestHistoryComponent } from './../../pages/request-history/request-history.component';
import { SignupComponent } from './../../pages/signup/signup.component';
import { RequestOnWaitComponent } from './../../pages/request-on-wait/request-on-wait.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'profile',           component: UserComponent },
    { path: 'employees',          component: TableComponent },
    { path: 'Requests',     component: TypographyComponent },
    { path: 'requests',          component: IconsComponent },
    { path: 'home',           component: MapsComponent },
    { path: 'Profile',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'signup',        component: SignupComponent },
    { path: 'RequestHistory',        component: RequestHistoryComponent },
    { path: 'RequestOnWait',        component: RequestOnWaitComponent },





];
