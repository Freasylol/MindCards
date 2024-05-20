import CardSet from "./pages/CardSet";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import CardSetCreation from "./pages/CardSetCreation";
import CardSetPass from "./pages/CardSetPass";
import CardSetView from "./pages/CardSetView"
import { CARDSET_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, CREATE_CARDSET_ROUTE, EDIT_CARDSET_ROUTE, CARDSET_PASS_ROUTE, CARDSET_LEADERBOARD, CARDSET_VIEW, CARDSET_FAVORITE, BROWSING_HISTORY, USER_LOG, SEARCH_ROUTE } from "./utils/consts"
import CardSetLeaderBoard from "./pages/CardSetLeaderBoard";
import CardSetFavorite from "./pages/CardSetFavorite";
import BrowsingHistory from "./pages/BrowsingHistory";
import UserLog from "./pages/UserLog";
import Search from "./pages/Search";

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: Profile 
    }, 
    {
        path: CARDSET_ROUTE,
        Component: CardSet
    },
    {
        path: CREATE_CARDSET_ROUTE,
        Component: CardSetCreation
    },
    {
        path: CARDSET_PASS_ROUTE,
        Component: CardSetPass
    },
    {
        path: CARDSET_LEADERBOARD,
        Component: CardSetLeaderBoard
    },
    {
        path: CARDSET_VIEW,
        Component: CardSetView
    },
    {
        path: CARDSET_FAVORITE,
        Component: CardSetFavorite
    },
    {
        path: BROWSING_HISTORY,
        Component: BrowsingHistory
    },
    {
        path: USER_LOG,
        Component: UserLog
    },
    {
        path: SEARCH_ROUTE,
        Component: Search
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    }
]