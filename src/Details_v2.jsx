import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Pet from "./Pet";

const Details_v2 = () => {
  const { id } = useParams();
  const [pet, setPet] = useState([]);

  useEffect(() => {
    requestPet();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPet() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

    const json = await res.json();

    setPet(json.pets);
  }

  return (
    <div className="pet-container">
      {pet.map((p) => (
        <Pet
          key={p.id}
          name={p.name}
          breed={p.breed}
          images={p.images}
          location={`${p.city}, ${p.state}`}
          animal={p.animal}
          id={p.id}
          description={p.description}
        />
      ))}
    </div>
  );
};

export default Details_v2;
