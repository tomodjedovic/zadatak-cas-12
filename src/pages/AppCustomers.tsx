import { ReactElement, useState } from "react";
import SingleCustomer from "../components/singleCustomer";

interface Customer {
  name: string;
  id: number;
}
const customerList: Customer[] = [
  { name: "Marko", id: 1 },
  { name: "Tomo", id: 2 },
  { name: "Nikola", id: 3 },
];

const AppCustomers: React.FC = () => {
  const [customers, setCustomers] = useState(customerList);
  function deleteCustomer(index: number) {
    const newCustomers = customers.filter((customer, i) => {
      return i !== index;
    });
    setCustomers(newCustomers);
  }
  return (
    <div>
      <h1>KUPCI</h1>

      <ul>
        <li>Lista kupaca</li>
        {customers.map((customer, index) => (
          <SingleCustomer
            key={index}
            index={index}
            customer={customer}
            deleteCustomer={deleteCustomer}
          />
        ))}
      </ul>
    </div>
  );
};
export default AppCustomers;
