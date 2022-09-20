import {Form, FormikProps} from "formik";
import {FormGroup} from "@mui/material";
import {LoginType} from "../../authTypes";
import {ProjectPasswordField} from "../../../../common/components/Forms/ProjectPasswordField/ProjectPasswordField";
import {ProjectTextField} from "../../../../common/components/Forms/ProjectTextField/ProjectTextField";
import {GeneralButton} from "../../../../common/components/Buttons/GeneralButton/GeneralButton";
import style from './LoginForm.module.css'

type PropsType = {
    formik: FormikProps<LoginType>;
};

export const LoginForm: React.FC<PropsType> = ({formik}) => {
    const { isValid, dirty, isSubmitting } = {...formik}
    return (
        <Form>
            <FormGroup>
                <ProjectTextField variant='standard' name="name" label="Name" disabled={isSubmitting} />
                <ProjectPasswordField name="password" label="Password" disabled={isSubmitting} />

                <div className={style.btn}>
                    <GeneralButton
                        fullWidth
                        label="Sing In"
                        disabled={!isValid || !dirty || isSubmitting}
                        type="submit"
                    />
                </div>

            </FormGroup>
        </Form>
    );
};
