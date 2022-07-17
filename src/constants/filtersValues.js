export const TYPE_FILTER = {
  type: "Type",
  optionValues: [
    {
      name: "All",
      value: "jpg,png,gif",
    },
    {
      name: "Static",
      value: "jpg, png",
    },
    {
      name: "Animated",
      value: "gif",
    },
  ],
};

export const LIMIT_FILTER = {
  type: "Limit",
  optionValues: [
    {
      name: "5 items per page",
      value: "5",
    },
    {
      name: "10 items per page",
      value: "10",
    },
    {
      name: "15 items per page",
      value: "15",
    },
    {
      name: "20 items per page",
      value: "20",
    },
  ],
};

export const ORDER_FILTER = {
  type: "Order",
  optionValues: [
    {
      name: "Random",
      value: "",
    },
    {
      name: "ASC",
      value: "asc",
    },
    {
      name: "DESC",
      value: "desc",
    },
  ],
};

export const BREED_FILTER = {
  type: "Breed",
  optionValues: [
    {
      name: "All",
      value: "",
    },
  ],
};
