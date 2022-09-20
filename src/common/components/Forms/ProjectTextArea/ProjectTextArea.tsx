import React from 'react';
import {TextareaAutosize} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import {useField} from "formik";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";

type PropsType = {
    name: string
    label: string
}

export const ProjectTextArea: React.FC<PropsType> = ({name, label}) => {

    const [field, meta] = useField(name);
    return (
        <FormControl fullWidth>
            <TextareaAutosize
                {...field}
                minRows={5}
                name='message'
                placeholder="Enter you message"
                style={{ width: 200 }}
            />
            {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
        </FormControl>
    );
};

