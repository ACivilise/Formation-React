import useData from "./hooks";
import UserInfoView from "./userInfoView";
import { ThemeProvider } from "@mui/material/styles";
import { muiTheme } from "mui/theme";
import { List } from "@mui/material";
import { MainBox } from "./styles";

const WithMui = () => {
  const { users } = useData();

  return (
    <ThemeProvider theme={muiTheme}>
      <List sx={MainBox}>
        {users.map(({ info: { firstName, lastName } }, index) => (
          <UserInfoView key={index} firstName={firstName} lastName={lastName} />
        ))}
      </List>
    </ThemeProvider>
  );
};

export default WithMui;
