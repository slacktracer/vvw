export const ddatc = {
  items: [
    {
      isActive: true,
      age: 40,
      name: { first: "Dickerson", last: "Macdonald" },
    },
    { isActive: false, age: 21, name: { first: "Larsen", last: "Shaw" } },
    {
      isActive: false,
      age: 9,
      name: { first: "Mini", last: "Navarro" },
      _rowVariant: "success",
    },
    { isActive: false, age: 89, name: { first: "Geneva", last: "Wilson" } },
    { isActive: true, age: 38, name: { first: "Jami", last: "Carney" } },
    { isActive: false, age: 27, name: { first: "Essie", last: "Dunlap" } },
    { isActive: true, age: 40, name: { first: "Thor", last: "Macdonald" } },
    {
      isActive: true,
      age: 87,
      name: { first: "Larsen", last: "Shaw" },
      _cellVariants: { age: "danger", isActive: "warning" },
    },
    { isActive: false, age: 26, name: { first: "Mitzi", last: "Navarro" } },
    {
      isActive: false,
      age: 22,
      name: { first: "Genevieve", last: "Wilson" },
    },
    { isActive: true, age: 38, name: { first: "John", last: "Carney" } },
    { isActive: false, age: 29, name: { first: "Dick", last: "Dunlap" } },
  ],
  fields: [
    {
      key: "name",
      label: "Person Full name",
      sortable: true,
      sortDirection: "desc",
    },
    {
      key: "age",
      label: "Person age",
      sortable: true,
      class: "text-center",
    },
    {
      key: "isActive",
      label: "is Active",
      formatter: (value, key, item): string => {
        key;
        item;
        return value ? "Yes" : "No";
      },
      sortable: true,
      sortByFormatted: true,
      filterByFormatted: true,
    },
    { key: "actions", label: "Actions" },
  ],
  totalRows: 1,
  currentPage: 1,
  perPage: 5,
  pageOptions: [5, 10, 15],
  sortBy: "",
  sortDesc: false,
  sortDirection: "asc",
  filter: null,
  filterOn: [],
  infoModal: {
    id: "info-modal",
    title: "",
    content: "",
  },
};
