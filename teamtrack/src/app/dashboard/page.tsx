import "../../styles/dashboard/dashboard.scss";
import NavBar from "../components/NavBar";
import SearchBar from "styles/app/components/SearchBar";
import Avatar from "styles/app/components/Avatar";
const Dashboard = () => {
    const brandName: string = "TeamTrack";
  return (
    <main>
{/*        <NavBar/>
        <div></div> */}

        <div className="brand_name">
            <h1>{brandName}</h1>
        </div>
        <div className="avatar_search">
            <SearchBar/>
            <Avatar/>
        </div>
        <div className="main_content">main_content</div>
        <NavBar/>
{/*        <div className="nav">
            <NavBar/>
        </div>*/}
    </main>
  );
};

export default Dashboard;
