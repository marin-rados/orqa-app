//database types
export type EmployeeType = {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  imageUrl: string;
  contactNumber: string;
  email: string;
  manager_id: number;
};

//store types
export type SearchStoreType = {
  search: string;
  setSearch: (search: string) => void;
};
