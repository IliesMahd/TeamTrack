import { useMemo } from "react";
import Link from "next/link";
import "../../styles/components/navbar.scss";
import { RxDashboard } from "react-icons/rx";
import { FaFolder } from "react-icons/fa";
import { createAvatar } from "@dicebear/core";
import { botttsNeutral } from "@dicebear/collection";

interface Projects {
  id: number;
  name: string;
  description: string;
  color: string;
  team: string[];
}

interface User {
  id: number;
  username: string;
  email: string;
  speciality?: string;
  projects: Projects[];
}

const NavBar = () => {
  const avatar = useMemo(() => {
    return createAvatar(botttsNeutral, {
      size: 48,
      radius: 50,
      seed: "Simon",
      // ... other options
    }).toDataUriSync();
  }, []);
  const user: User = {
    id: 1,
    username: "John Doe",
    email: "test.1@gmail.com",
    speciality: "Développeur Front-End",
    projects: [
      {
        id: 1,
        name: "Projet 1",
        description: "Description du projet 1",
        color: "red",
        team: ["John Doe", "Jane Doe"],
      },
      {
        id: 2,
        name: "Projet 2",
        description: "Description du projet 2",
        color: "blue",
        team: ["John Doe", "Jane Doe"],
      },
    ],
  };
  return (
    <nav>
      <div className="user-informations">
        <img src={avatar} alt="avatar" />
        <div className="wrapper-texts">
          <h1>{user.username}</h1>
          {user.speciality ? (
            <p>{user.speciality}</p>
          ) : (
            <p>Aucune spécialité</p>
          )}
        </div>
      </div>
      <ul>
        <li>
          <p>Menu</p>
          <Link href="/" className="link">
            <RxDashboard className="icon"/>
            Tableau de bord
          </Link>
          <Link href="/" className="link">
            <FaFolder className="icon"/>
            Projets
          </Link>
        </li>
        <li>
          <p>Equipes</p>
        </li>
        <li>
          <p>Général</p>
        </li>
      </ul>
      {/* <ul>
        <li>
          <p>Menu</p>
          <Link href="/" className="link">
            <RxDashboard />
            Accueil
          </Link>
          <Link href="/" className="link">
            Projets
          </Link>
        </li>
        <li>
          <p>Equipes</p>
        </li>
        <li>Général</li>
      </ul> */}
    </nav>
  );
};

export default NavBar;
