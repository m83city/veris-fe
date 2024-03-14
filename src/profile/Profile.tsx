import "./Profile.scss";
interface IProfile {
  name: string;
  secondName: string;
  lastName: string;
  //position: string;
  //vacation: number;
}
function Profile({ name, secondName, lastName }: IProfile) {
  return (
    <>
      <header className="profileHeader">
        <div className="profilePhoto" />
      </header>
      <div className="profileNames">
        <span>{name}</span>
        <span>{secondName}</span>
        <span>{lastName}</span>
      </div>
      <span>work position</span>
      <span>number of vacation days</span>
    </>
  );
}
export default Profile;
