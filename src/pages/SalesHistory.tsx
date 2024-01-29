import SalesHistoryRow from "../components/ui/SalesHistoryRow";
import { useGetSalesHistoryQuery } from "../redux/features/history/historyApi";
import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Name", "Quantity", "Total Price", "Buyer","Date of Selling"];
 
export type TSalesHistory ={
  _id: string;
  productName: string;
  quantity: number;
  totalPrice: number;
  buyerName : string;
  dateOfSelling : string;
}

export type TSalesHistories = TSalesHistory[];


const SalesHistory = () => {


  const {data} = useGetSalesHistoryQuery(undefined);
  const allSales : TSalesHistories = data?.data;



  return (
   <div className="container mx-auto">
     <h1 className="text-center py-10 text-2xl text-blue-gray-500 font-extrabold">
       All Sales History
      </h1>
     <Card placeholder={''} className="h-full w-full overflow-x-auto">
      <table className="w-full min-w-max table-auto text-left">
        
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                placeholder={''} 
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
          {allSales?.map((item, index )=>(<SalesHistoryRow item={item} key={index} />))}
        </tbody>

      </table>
    </Card>
   </div>
  );
};

export default SalesHistory;