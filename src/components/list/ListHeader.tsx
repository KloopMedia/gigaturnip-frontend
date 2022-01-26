import React from 'react';
import {Button, Grid, IconButton, Tooltip, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import {ViewProps} from "./List.types";

type Props = {
    label: string,
    location: any,
    view: ViewProps,
    showCreateButton?: boolean,
    showViewButton?: boolean,
    onViewChange: (view: ViewProps) => void
};

const ListHeader = (props: Props) => {
    const {label, view, location, showCreateButton, showViewButton, onViewChange} = props;
    return (
        <Grid container alignItems={"center"} spacing={1}>
            <Grid item flex={1}>
                <Typography variant={"h4"}>{label}</Typography>
            </Grid>
            {showCreateButton && <Grid item>
                <Button component={Link} to={"new"} state={{from: location}} variant={"contained"} sx={{
                    '&:hover': {
                        color: 'white',
                        boxShadow: 'none',
                    }
                }}>Создать</Button>
            </Grid>}
            {showViewButton &&
                <Grid item>
                    <Tooltip title={"Сетка"}>
                        <IconButton
                            color={view === "grid" ? "primary" : "default"}
                            onClick={() => onViewChange("grid")}
                        >
                            <GridViewIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={"Список"}>
                        <IconButton
                            color={view === "list" ? "primary" : "default"}
                            onClick={() => onViewChange("list")}
                        >
                            <ViewListIcon/>
                        </IconButton>
                    </Tooltip>
                </Grid>
            }
        </Grid>
    );
};

export default ListHeader