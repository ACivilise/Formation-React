import { ListItem, ListItemText } from "@mui/material";
import { UserInfos } from "axios/models/types";

const UserInfoView = ({ firstName, lastName }: UserInfos) => {
  return (
    <ListItem>
      <ListItemText primary={firstName} secondary={lastName} />
    </ListItem>
  );
};

export default UserInfoView;
