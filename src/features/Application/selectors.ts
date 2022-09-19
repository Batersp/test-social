import {AppRootStateType} from "../../utils/types";
import {requestStatus} from "../../common/enums/requestStatus";
import {SnackbarType} from "./applicationTypes";

export const getIsLoading = (state: AppRootStateType): requestStatus => state.app.status
export const getSnackbar = (state: AppRootStateType): SnackbarType => state.app.snackbar