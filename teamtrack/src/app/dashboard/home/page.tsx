"use client";
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import User from "../../services/user/user"

const Home = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const email = session?.user?.email;
        if (email) {
            const user = User(email)
                .then(data => setUserData(data))
                .catch(error => console.error("Erreur lors de la récupération des données"))
        }
    }, [session]);
}
export default Home;

