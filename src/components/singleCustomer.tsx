import React from "react";

interface CustomerProps {
  customer: {
    name: string;
    id: number;
  };
  index: number;
  deleteCustomer(index: number): void;
}

const SingleCustomer: React.FC<CustomerProps> = ({
  customer,
  index,
  deleteCustomer,
}) => {
  return (
    <li>
      ime : {customer.name} , id : {customer.id}{" "}
      <button
        onClick={() => {
          deleteCustomer(index);
        }}
      >
        obriši{" "}
      </button>
    </li>
  );
};
export default SingleCustomer;
