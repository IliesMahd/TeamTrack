
async function setUser() {

}
async function getUser(email: string) {
    try {
        const response = await fetch(`/api/user/${email}`);

        if (!response.ok) {
            throw new Error(`Erreur ${response.status}: ${response.statusText}`);
        }

        return await response.json();
    } catch(error) {
        console.error("aaaaaaaa Erreur lors de la récupération des données de l'utilisateur :", error);
    }
}

export default async function User(email: string) {
    return await getUser(email);
}