import {changeLoggedIn} from "../features/Auth/auth-reducer";
import {setAppSnackbarValue, setAppStatus, setError} from "../features/Application/application-reducer";
import {addPost, changePost, removePost, setProfile} from "../features/Content/Profile/profile-reducer";
import {addNews, changeFilter} from "../features/News/news-reducer";


export type AppActionsType =
   | ReturnType<typeof changeLoggedIn>
   | ReturnType<typeof setAppStatus>
   | ReturnType<typeof setAppSnackbarValue>
   | ReturnType<typeof setError>
   | ReturnType<typeof setProfile>
   | ReturnType<typeof addPost>
   | ReturnType<typeof removePost>
   | ReturnType<typeof changePost>
   | ReturnType<typeof addNews>
   | ReturnType<typeof changeFilter>
