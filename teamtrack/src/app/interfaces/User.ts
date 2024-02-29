import Avatar from './Avatar';
import Projects from './Projects';
interface User {
    id: number;
    username: string;
    email: string;
    speciality?: string;
    projects: Projects[];
    avatar: Avatar[];
}

export default User;