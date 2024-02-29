"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import "../../styles/components/navbar.scss";
import {AppstoreOutlined, CalendarOutlined, FolderOutlined, MessageOutlined, SettingOutlined} from "@ant-design/icons";

const NavBar = () => {
  const [currentNav, setCurrentNav] = useState("home");
  return (
    <nav>
      <ul className="pages_link">
        <li>
          <Link href="home" className={`link ${currentNav === "home" ? "active" : ""}`} onClick={() => setCurrentNav("home")}>
            <AppstoreOutlined className="icon"/>
            <p>Accueil</p>
          </Link>
        </li>
        <li>
          <Link href="projects" className={`link ${currentNav === "projects" ? "active" : ""}`} onClick={() => setCurrentNav("projects")}>
            <FolderOutlined className="icon"/>
            <p>Projets</p>
          </Link>
        </li>
        <li>
          <Link href="messages" className={`link ${currentNav === "messages" ? "active" : ""}`} onClick={() => setCurrentNav("messages")}>
            <MessageOutlined className="icon"/>
            <p>Messages</p>
          </Link>
        </li>
        <li>
            <Link href="settings" className={`link ${currentNav === "settings" ? "active" : ""}`} onClick={() => setCurrentNav("settings")}>
              <SettingOutlined className="icon"/>
                <p>Paramètres</p>
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
