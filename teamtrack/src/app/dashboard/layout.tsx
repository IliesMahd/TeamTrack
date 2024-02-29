"use client";
import "../../styles/dashboard/dashboard.scss";
import NavBar from "../components/NavBar";
import SearchBar from "styles/app/components/SearchBar";
import Avatar from "styles/app/components/Avatar";
import Notifications from "styles/app/components/Notifications";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

interface Projects {
    id: number;
    name: string;
    description: string;
    color: string;
    team: string[];
}

interface Avatar {
    seed: string,
    backgroundColor: string,
    eyes: string,
    mouth: string,
}
interface User {
    id: number;
    username: string;
    email: string;
    speciality?: string;
    projects: Projects[];
    avatar: Avatar[];
}

const Layout = ({children}: any) => {
    const router = useRouter();

    useEffect(() => {
        const pagesPath: string[] = ["/home", "/projects", "/messages", "/settings"];

        for (let path of pagesPath) {
            router.prefetch(path);
        }
    }, [router])
    const user: User = {
        id: 1,
        username: "John Doe",
        email: "test.1@gmail.com",
        speciality: "Développeur Front-End",
        avatar: [
            {
                seed: "Tigger",
                backgroundColor: "#9B5DE5",
                eyes: "shade01",
                mouth: "diagram",
            },

        ],
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
    const brandName: string = "TeamTrack";
    return (
        <main>
            <div className="brand_name">
                <h1>{brandName}</h1>
            </div>
            <div className="avatar_search">
                <SearchBar/>
                <Notifications/>
                <Avatar avatar={user.avatar}/>
            </div>
            <div className="main_content">
                {children}
            </div>
            <NavBar/>
        </main>
    )
}

export default Layout;