import "./App.css";
import UserCard from "./components/UserCard";

const userData = [
  {
    name: "hyun_w",
    job: "Programmer",
    imageSrc: "avatar.webp",
  },
  {
    name: "hyunw_a",
    job: "Designer",
    imageSrc: "avatar2.webp",
  },
];

const App = () => {
  return (
    <>
       {userData.map((value, index) => (
        <UserCard 
          key={index}
          name={value.name} 
          job={value.job} 
          imageSrc={value.imageSrc} />
      ))}    
    </>
  );
};

export default App;