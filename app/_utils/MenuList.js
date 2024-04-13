import { Home, LayoutGrid, Rocket, Settings, User, Speech ,Building,Calendar,Rss,StickyNote} from "lucide-react";

export default[
    {
        id:1,
        name:'Home',
        path:'/home',
        icon:Home
    },
    {
        id:2,
        name:'Blogs',
        path:'/blogsection',
        icon:Rss
    },
    {
        id:3,
        name:'Placement Notes',
        path:'/placementnotes',
        icon:StickyNote
    },
    {
        id:4,
        name:'Events',
        path:'/events',
        icon:Calendar
    },
    {
        id:5,
        name:'Teachers',
        path:'/teachers',
        icon:Speech
    },
    {
        id:6,
        name:'About',
        path:'/about',
        icon:Building
    },
    {
        id:7,
        name:'Contact Us',
        path:'/contactus',
        icon:User
    },

]