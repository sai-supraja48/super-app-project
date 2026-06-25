import useStore from "../../store/useStore";

function ProfileCard() {
  const user = useStore((state) => state.user);
  const categories = useStore((state) => state.categories);

  return (
    <div className="card profile-card">

      <div className="profile-top">

        <img
          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Supraja"
          alt="Profile"
          className="profile-image"
        />

        <div className="profile-info">
          <h2>{user.name}</h2>

          <p>{user.username}</p>

          <p>{user.email}</p>

          <p>{user.mobile}</p>
        </div>

      </div>

      <div className="category-chips">

        {categories.map((category) => (
          <span
            key={category}
            className="chip"
          >
            {category}
          </span>
        ))}

      </div>

    </div>
  );
}

export default ProfileCard;