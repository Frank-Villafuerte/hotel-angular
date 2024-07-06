import { Routes } from '@angular/router';
import { HeaderComponent} from './header/header.component';
import { HomeComponent} from './home/home.component';
import { RestaurantComponent} from './restaurant/restaurant.component';
import { RoomComponent} from './room/room.component';
import { AboutusComponent} from './aboutus/aboutus.component';
import { BlogComponent} from './blog/blog.component';
import { ContactComponent} from './contact/contact.component';
export const routes: Routes = [
    { path: '', component: HomeComponent }
    ,{ path: 'Rooms', component: RoomComponent }
    ,{ path: 'Restaurants', component: RestaurantComponent }
    ,{ path: 'AboutUs', component: AboutusComponent }
    ,{ path: 'Blog', component: BlogComponent }
    ,{ path: 'Contact', component: ContactComponent }
];
