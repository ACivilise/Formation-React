import { BrowserRouter, Routes, Route } from "react-router-dom";
import useData from "./hooks";
import LinksBar from "./linksBar";
import { Box, TextField } from "@mui/material";
import { NameWithRoutesAdvanced } from "./const";
import { muiTheme } from "mui/theme";

const WithAll = () => {
  const { routes, setCurrentId } = useData();
  return (
    <Box
      data-cy={NameWithRoutesAdvanced}
      sx={{
        marginTop: "10px",
        [muiTheme.breakpoints.up("md")]: {
          paddingLeft: "20px",
          paddingRight: "20px",
        },
        [muiTheme.breakpoints.down("md")]: {
          paddingLeft: "10px",
          paddingRight: "10px",
        },
      }}
    >
      <BrowserRouter>
        <TextField
          data-cy={`${NameWithRoutesAdvanced}TextField`}
          variant="outlined"
          onChange={(event) => setCurrentId(event.target.value)}
        />
        <LinksBar
          data-cy={`${NameWithRoutesAdvanced}LinksBar`}
          routes={routes}
        />
        <Box data-cy={`${NameWithRoutesAdvanced}ChildRenderer`}>
          <Routes>
            {routes.map(({ key, path, element }) => (
              <Route key={key} path={path} element={element} />
            ))}
          </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  );
};

export default WithAll;
