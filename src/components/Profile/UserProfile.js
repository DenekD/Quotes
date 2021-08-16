import ProfileForm from "./ProfileForm";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <section className={classes.container}>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
