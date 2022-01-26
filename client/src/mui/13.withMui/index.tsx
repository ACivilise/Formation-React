import useData from "./hooks";
import UserInfoView from "./userInfoView";
import { ThemeProvider } from "@mui/material/styles";
import { muiTheme } from "mui/theme";
import { Button, Box, List, Typography } from "@mui/material";
import { MainBox } from "./styles";

const WithMui = () => {
  const { users } = useData();

  return (
    <ThemeProvider theme={muiTheme}>
      <Box data-cy="parent" sx={{ display: "flex", flexDirection: "row" }}>
        <List data-cy="list" sx={MainBox}>
          {users.map(({ info: { firstName, lastName } }, index) => (
            <UserInfoView
              key={index}
              firstName={firstName}
              lastName={lastName}
            />
          ))}
        </List>
        <Box data-cy="others" sx={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h1">test</Typography>
          <Typography>test 2 </Typography>
          <Button></Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default WithMui;
