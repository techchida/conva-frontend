import SignIn from "../pages/auth/signin";
import SignUp from "../pages/auth/signup";
import Campaigns from "../pages/campaigns/campaigns";
import Leads from "../pages/campaigns/leads";
import NewCampaign from "../pages/campaigns/new";

export const appRoutes = [
  {
    path: "/campaigns",
    element: <Campaigns />,
  },
  {
    path: "/campaigns/new",
    element: <NewCampaign />,
  },
  {
    path: "/campaigns/:id/leads",
    element: <Leads />,
  },
];

export const authRoutes = [
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
];
