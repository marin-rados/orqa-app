//database types
export type EmployeeType = {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  imageUrl: string;
  contactNumber: string;
  email: string;
};

//store types
export type SearchStoreType = {
  search: string;
  setSearch: (lightMode: string) => void;
};
