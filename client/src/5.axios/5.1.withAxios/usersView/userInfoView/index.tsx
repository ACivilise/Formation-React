import { UserInfos } from '5.axios/models/types';
import { flexRow } from 'styles';

const UserInfoView = ({ firstName, lastName }: UserInfos) => {
  return (
    <div
      style={{
        width: '100%',
        ...flexRow,
      }}
    >
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
    </div>
  );
};

export default UserInfoView;
