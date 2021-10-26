import { Home } from '../screens/home/Home.screen';
import { Signup } from '../screens/signup/Signup.screen';
import { Welcome } from '../screens/welcome/Welcome.screen';

interface IRouteItem {
    name: any;
    component: any;
}

interface IRoutes {
    welcome: IRouteItem
    signup: IRouteItem
    home: IRouteItem
}

export const ROUTES: IRoutes = {
    welcome: {
        name: "welcome",
        component: Welcome
    },
    home: {
        name: "home",
        component: Home
    },
    signup: {
        name: "signup",
        component: Signup
    }
}