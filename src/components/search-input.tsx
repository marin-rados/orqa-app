type Props = {
  setSearch: (value: string) => void;
};

const SearchInput = ({ setSearch }: Props) => {
  return (
    <input
      type="text"
      placeholder="Search for an employee..."
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
  );
};

export default SearchInput;
