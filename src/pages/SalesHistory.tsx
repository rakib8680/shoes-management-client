import { useEffect, useState } from "react";
import SalesHistoryRow from "../components/ui/SalesHistoryRow";
import { useGetSalesHistoryQuery } from "../redux/features/history/historyApi";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "Name",
  "Quantity",
  "Total Price",
  "Buyer",
  "Date of Selling",
];
export type TSalesHistory = {
  _id: string;
  productName: string;
  quantity: number;
  totalPrice: number;
  buyerName: string;
  dateOfSelling: string;
};
export type TSalesHistories = TSalesHistory[];

const SalesHistory = () => {
  const { data } = useGetSalesHistoryQuery(undefined);
  const allSales: TSalesHistories = data?.data;
  const [filteredSales, setFilteredSales] = useState<TSalesHistories>([]);
  
  useEffect(() => {
    if (allSales) {
      setFilteredSales(allSales);
    }
  }, [allSales]);

  // handle filter change
  const handleFilterChange = (value: string | undefined) => {
    const filter = value;
    const now = new Date();

    if (filter === "daily") {
      const todaySales = allSales.filter((sale) => {
        const saleDate = new Date(sale.dateOfSelling);
        return (
          saleDate.getDate() === now.getDate() &&
          saleDate.getMonth() === now.getMonth() &&
          saleDate.getFullYear() === now.getFullYear()
        );
      });
      setFilteredSales(todaySales);
    } else if (filter === "weekly") {
      const weekSales = allSales.filter((sale) => {
        const saleDate = new Date(sale.dateOfSelling);
        // get the start of the week
        const startOfWeek = now.getDate() - now.getDay();
        const endOfWeek = startOfWeek + 6; // last day is the first day + 6
        return (
          saleDate.getDate() >= startOfWeek &&
          saleDate.getDate() <= endOfWeek &&
          saleDate.getMonth() === now.getMonth() &&
          saleDate.getFullYear() === now.getFullYear()
        );
      });
      setFilteredSales(weekSales);
    } else if (filter === "monthly") {
      const thisMonthSales = allSales.filter((sale) => {
        const saleDate = new Date(sale.dateOfSelling);
        return (
          saleDate.getMonth() === now.getMonth() &&
          saleDate.getFullYear() === now.getFullYear()
        );
      });
      setFilteredSales(thisMonthSales);
    } else {
      setFilteredSales(allSales);
    }
  };

  return (
    <div className="container mx-auto pb-28">
      <h1 className="text-center py-10 text-2xl text-blue-gray-500 font-extrabold">
        All Sales History
      </h1>
      <div className="flex justify-end pr-2 md:p-2">
        <select
          onChange={(event) => handleFilterChange(event.target.value)}
          className="filterSalesHistory "
        >
          <option value="all">All</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <Card
        placeholder={""}
        className="h-full w-full overflow-x-auto p-5 md:p-0"
      >
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    placeholder={""}
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70 text-center"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredSales?.map((item, index) => (
              <SalesHistoryRow item={item} key={index} />
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default SalesHistory;
