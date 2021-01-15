import Home from '../views/Home'
import News from '../views/News'
import Jobs from '../views/Jobs'
import Ask from '../views/Ask'
var routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/news',
        name: 'News',
        component: News,
    },
    {
        path: '/job',
        name: 'Jobs',
        component: Jobs,
    },
    {
        path: '/ask',
        name: 'Ask',
        component: Ask,
    },
]
export default routes
