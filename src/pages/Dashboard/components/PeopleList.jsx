import { useState } from "react";
import PeopleListItem from "./PeopleListItem";

export default function PeopleList({ people, setPeople, editable }) {
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing((prevEditing) => !prevEditing);
  };

  return (
    <>
      {editable && (
        <button onClick={handleEditClick}>{editing ? "Done" : "Edit"}</button>
      )}
      <ul>
        {people.map((person) => (
          <PeopleListItem
            key={person.login.uuid}
            person={person}
            people={people}
            setPeople={setPeople}
            editable={editable && editing}
          />
        ))}
      </ul>
    </>
  );
}
