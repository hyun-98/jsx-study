const UserCard = ({name, job, photo}) => {

    return (
        <div className="card">
            <img src={photo} alt={`${name}'s avatar`}></img>
            <h2>{name}</h2>
            <p>{job}</p>
        </div>
    );
};

export default UserCard;