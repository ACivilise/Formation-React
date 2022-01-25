import { UserInfos } from "axios/models/types";

const UserInfoView = ({ firstName, lastName }: UserInfos) => {
  return (
    <div>
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
    </div>
  );
};

export default UserInfoView;
