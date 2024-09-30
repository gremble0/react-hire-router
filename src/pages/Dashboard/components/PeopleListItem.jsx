import { Link } from "react-router-dom";

export default function PeopleListItem({ person, people, setPeople }) {
  const firePerson = () => {
    setPeople(
      people.filter(
        (hiredPerson) => hiredPerson.login.uuid !== person.login.uuid,
      ),
    );
  };

  return (
    <li>
      <Link to={"/view/" + person.login.uuid}>
        <h3>
          {person.name.first} {person.name.last}
        </h3>
      </Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {person.wage && <button onClick={firePerson}>fire</button>}
    </li>
  );
}
