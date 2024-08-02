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
  setSearch: (lightMode: string) => void;
};

export type EmployeeDiagramType = {
  label: string;
  type: string;
  expanded: boolean;
  data: string[];
  name: string;
  imageUrl: string;
  children: string[];
};
