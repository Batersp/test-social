import React from 'react';
import {Box, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import {CategoryType} from "../newsTypes";
import style from './SelectComponent.module.css'

type PropsType = {
    categories: CategoryType[]
    filter: CategoryType
    changeFilter: (value: CategoryType) => void
}

export const SelectComponent: React.FC<PropsType> = ({categories, filter, changeFilter}) => {


    const handleChange = (event: SelectChangeEvent) => {
        changeFilter(event.target.value as CategoryType);
    };

    return (
        <Box className={style.container}>
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                    value={filter}
                    label="Category"
                    onChange={handleChange}
                >
                    {categories.map(el => <MenuItem key={el} value={el}>{el}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    );
};

