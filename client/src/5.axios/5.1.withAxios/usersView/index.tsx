import useData from './hooks';
import { UsersViewProps } from './types';
import UserInfoView from './userInfoView';

const UsersView = ({ users }: UsersViewProps) => {
  const {} = useData();
  return (
    <div>
      {users &&
        users.map(({ info: { firstName, lastName } }, index) => (
          <UserInfoView key={index} firstName={firstName} lastName={lastName} />
        ))}
    </div>
  );
};

export default UsersView;
