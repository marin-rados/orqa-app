import { useSearchStore } from "../store/store";
import SearchInput from "./search-input";

const Header = () => {
  const { setSearch } = useSearchStore();
  return (
    <>
      <div className="header">
        <SearchInput setSearch={setSearch} />
      </div>
      <hr className="header__hr" />
    </>
  );
};

export default Header;
