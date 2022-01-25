import useData from "./hooks";
import UserInfoView from "./userInfoView";

const WithAxios = () => {
  const { users } = useData();

  return (
    <div>
      {users.map(({ info: { firstName, lastName } }, index) => (
        <UserInfoView key={index} firstName={firstName} lastName={lastName} />
      ))}
    </div>
  );
};

export default WithAxios;
