"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import "../../styles/components/navbar.scss";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineFolder } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";
import { createAvatar } from "@dicebear/core";
import { botttsNeutral } from "@dicebear/collection";
import { BsCalendar4Week } from "react-icons/bs";


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
  const [currentNav, setCurrentNav] = useState("overview");
  const [projectIsOpen, setProjectIsOpen] = useState(false);
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
        name: "Interface UI/UX - Banque de France",
        description: "Description du projet 1",
        color: "#9B5DE5",
        team: ["John Doe", "Jane Doe"],
      },
      {
        id: 2,
        name: "Application mobile - Banque de France",
        description: "Description du projet 2",
        color: "#F77F00",
        team: ["John Doe", "Jane Doe"],
      },
    ],
  };
  return (
    <nav>
      <ul className="pages_link">
        <li>
          <Link href="##" className={`link ${currentNav === "overview" ? "active" : ""}`} onClick={() => setCurrentNav("overview")}>
            <MdOutlineDashboard className="icon" size={24} />
            <p>Tableau de bord</p>
          </Link>
        </li>
        <li>
          <Link href="##" className={`link ${currentNav === "projects" ? "active" : ""}`} onClick={() => setCurrentNav("projects")}>
            <MdOutlineFolder className="icon" size={24} />
            <p>Projets</p>
          </Link>
        </li>
        <li>
          <Link href="##" className={`link ${currentNav === "calendar" ? "active" : ""}`} onClick={() => setCurrentNav("calendar")}>
            <BsCalendar4Week className="icon" size={24} />
            <p>Calendrier</p>
          </Link>
        </li>
      </ul>
{/*      <div className="user-informations">
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
      <ul className="first-level">
        <p className="category-title">Menu</p>
        <li>
          <Link
            href="##"
            className={`link ${currentNav === "overview" ? "active" : ""}`}
            onClick={() => {
              setCurrentNav("overview");
              setProjectIsOpen(false);
            }}
          >
            <MdOutlineDashboard className="icon" size={24} />
            <p>Tableau de bord</p>
          </Link>
        </li>
        <li>
          <Link
            href="##"
            className={`link ${currentNav === "projet" ? "active" : ""}`}
            onClick={() => setCurrentNav("projet")}
          >
            <MdOutlineFolder className="icon" size={24} />
            <div className="wrapper-projects-link">
              <p>Projets</p>
              {projectIsOpen ? (
                <MdArrowDropDown
                  className="icon"
                  size={24}
                  onClick={() => setProjectIsOpen(false)}
                />
              ) : (
                <MdArrowRight
                  className="icon"
                  size={24}
                  onClick={() => setProjectIsOpen(true)}
                />
              )}
            </div>
          </Link>
          {projectIsOpen ? (
            <ul className="projects-list">
              {user.projects.map((project) => (
                <li key={project.id} className="projects">
                  <MdFolder className="icon" size={24} fill={project.color} />
                  <p>{project.name}</p>
                   <Link
                    href="##"
                    className="link"
                    style={{ backgroundColor: project.color }}
                  >
                    <p>{project.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      </ul>
      <ul className="first-level">
        <li>
          <p className="category-title">Equipes</p>
        </li>
      </ul>
      <ul className="first-level">
        <li>
          <p className="category-title">Général</p>
        </li>
      </ul>*/}
    </nav>
  );
};

export default NavBar;
