import {changeLoggedIn} from "../features/Auth/auth-reducer";
import {setAppSnackbarValue, setAppStatus, setError} from "../features/Application/application-reducer";
import {setProfile} from "../features/Profile/profile-reducer";


export type AppActionsType =
   | ReturnType<typeof changeLoggedIn>
   | ReturnType<typeof setAppStatus>
   | ReturnType<typeof setAppSnackbarValue>
   | ReturnType<typeof setError>
   | ReturnType<typeof setProfile>
