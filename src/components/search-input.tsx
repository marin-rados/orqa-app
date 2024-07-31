import searchIcon from "../assets/search-icon.svg";

type Props = {
  setSearch: (lightMode: string) => void;
};

const SearchInput = ({ setSearch }: Props) => {
  return (
    <div className="search">
      <img className="search__icon" src={searchIcon} alt="Search Icon" />
      <input
        className="search__input"
        type="text"
        placeholder="Search for an employee..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchInput;
