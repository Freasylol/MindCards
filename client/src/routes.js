import Admin from "./pages/Admin";
import CardSet from "./pages/Cardset";
import BankAccount from "./pages/BankAccount";
import Credit from "./pages/Credit";
import Deposit from "./pages/Deposit";
import Main from "./pages/Main";
import MakeCredit from "./pages/MakeCredit";
import MakeTransaction from "./pages/MakeTransaction";
import Profile from "./pages/Profile";
import Transaction from "./pages/Transaction";
import CardSetCreation from "./pages/CardSetCreation";
import CardSetPass from "./pages/CardSetPass";
import CardSetView from "./pages/CardSetView"
import { ADMIN_ROUTE, CREDIT_ROUTE, CARDSET_ROUTE, DEPOSIT_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, TRANSACTION_ROUTE, MAKE_TRANSACTION_ROUTE,BANK_ACCOUNT_ROUTE, CREATE_CREDIT_ROUTE, CREATE_CARDSET_ROUTE, EDIT_CARDSET_ROUTE, CARDSET_PASS_ROUTE, CARDSET_LEADERBOARD, CARDSET_VIEW } from "./utils/consts"
import CardSetLeaderBoard from "./pages/CardSetLeaderBoard";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile 
    }, 
    {
        path: CARDSET_ROUTE,
        Component: CardSet
    },
    {
        path: CREDIT_ROUTE,
        Component: Credit
    },
    {
        path: DEPOSIT_ROUTE,
        Component: Deposit
    },
    {
        path: TRANSACTION_ROUTE,
        Component: Transaction
    },
    {
        path: MAKE_TRANSACTION_ROUTE,
        Component: MakeTransaction
    },
    {
        path: BANK_ACCOUNT_ROUTE,
        Component: BankAccount
    },
    {
        path: CREATE_CREDIT_ROUTE,
        Component: MakeCredit
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
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    }
]