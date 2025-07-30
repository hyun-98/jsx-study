const UserCard = ({name, job, imageSrc}) => {
    return (
        <div className="card">
          <img src={imageSrc} alt={name}></img>
           <h2>{name}</h2>
           <h2>{job}</h2>
      </div>
    )
}

export default UserCard;