"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import "../../styles/components/navbar.scss";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiFolder } from "react-icons/bi"
import { BiCalendar } from "react-icons/bi";
import { BiCog } from "react-icons/bi";

const NavBar = () => {
  const [currentNav, setCurrentNav] = useState("home");
  return (
    <nav>
      <ul className="pages_link">
        <li>
          <Link href="dashboard/home" className={`link ${currentNav === "home" ? "active" : ""}`} onClick={() => setCurrentNav("home")}>
{/*            <FaHouse className="icon" size={24} />*/}
            <BiHomeAlt2 className="icon" size={24} />
          </Link>
        </li>
        <li>
          <Link href="##" className={`link ${currentNav === "projects" ? "active" : ""}`} onClick={() => setCurrentNav("projects")}>
{/*            <MdOutlineFolder className="icon" size={24} />*/}
            <BiFolder className="icon" size={24} />
          </Link>
        </li>
        <li>
          <Link href="##" className={`link ${currentNav === "calender" ? "active" : ""}`} onClick={() => setCurrentNav("calender")}>
            <BiCalendar className="icon" size={24} />
          </Link>
        </li>
        <li>
            <Link href="##" className={`link ${currentNav === "settings" ? "active" : ""}`} onClick={() => setCurrentNav("settings")}>
                <BiCog className="icon" size={24} />
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
