import { data } from "../utils/constants.js";
import "./Animal.css";

function Animal({ selectedAnimal }) {
  const animal = data.find((item) => {
    return item.name == selectedAnimal;
  });

  return <img className="animal-image" src={animal.image} alt={animal.name} />;
}

export default Animal;
