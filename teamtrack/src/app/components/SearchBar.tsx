import { BsSearch } from "react-icons/bs";
import "../../styles/components/searchbar.scss";

const SearchBar = () => {
    return (
        <div className="search_bar">
            <BsSearch className="icon"/>
            <input type="text" placeholder="Trouver un projet..."/>
        </div>
    )
}

export default SearchBar;