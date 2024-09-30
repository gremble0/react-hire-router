import PeopleListItem from "./PeopleListItem";

export default function PeopleList({ people, setPeople }) {
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem
          key={index}
          person={person}
          people={people}
          setPeople={setPeople}
        />
      ))}
    </ul>
  );
}
