import {authActions} from "../features/Auth";
import {appActions} from "../features/Application";

export type AppActionsType =
   | ReturnType<typeof authActions.changeLoggedIn>
   | ReturnType<typeof appActions.setAppStatus>
   | ReturnType<typeof appActions.setAppSnackbarValue>