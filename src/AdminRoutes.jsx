import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import {Home} from "@/pages/dashboards/admin";
import { SignIn,SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};
//  his names are for Side menu
 export const adminRoutes = [
  {
    layout: "admin",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Home ",
        path: "/home",
        element: <Home />,
      },
      // {
      //   icon: <UserCircleIcon {...icon} />,
      //   name: "profile",
      //   path: "/profile",
      //   element: <Profile />,
      // },
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: "feedback",
      //   path: "/feedback",
      //   element: <FeedBack />,
      // },
      // {
      //   icon: <BellIcon {...icon} />,
      //   name: "settings",
      //   path: "/settings",
      //   element: <Settings/>,
      // },
    ],
  },
  
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];





export default adminRoutes;
