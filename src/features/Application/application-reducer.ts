import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {requestStatus} from "../../common/enums/requestStatus";
import {SnackbarType} from "./applicationTypes";
import {snackbarType} from "../../common/enums/snackbarType";

export const slice = createSlice({
    name: 'app',
    initialState: {
        status: requestStatus.LOADING,
        snackbar: {} as SnackbarType
    },
    reducers: {
        setAppStatus(state, action: PayloadAction<{status: requestStatus}>) {
            state.status = action.payload.status
        },
        setAppSnackbarValue(state, action: PayloadAction<{type: snackbarType | undefined, message: string | null}>) {
            state.snackbar = action.payload
        }
    }

})