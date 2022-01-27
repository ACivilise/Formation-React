import { muiTheme } from "6.mui/theme";
import { SxProps } from "@mui/material";

export const MainBox = {
    marginTop: '10px',
    [muiTheme.breakpoints.up('md')]: {
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    [muiTheme.breakpoints.down('md')]: {
        paddingLeft: '10px',
        paddingRight: '10px',
    },
} as SxProps;