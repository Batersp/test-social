import {AppRootStateType} from "../../utils/types";
import {requestStatus} from "../../common/enums/requestStatus";

export const getIsLoading = (state: AppRootStateType): requestStatus => state.app.status