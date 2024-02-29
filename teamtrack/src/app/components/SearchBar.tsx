import "../../styles/components/searchbar.scss";
import {SearchOutlined} from "@ant-design/icons";

const SearchBar = () => {
    return (
        <div className="search_bar">
            <SearchOutlined className="icon"/>
            <input type="text" placeholder="Trouver un projet..."/>
        </div>
    )
}

export default SearchBar;