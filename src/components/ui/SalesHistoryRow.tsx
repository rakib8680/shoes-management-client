import { Typography } from "@material-tailwind/react";
import { TSalesHistory } from "../../pages/SalesHistory";

const SalesHistoryRow = ({item}:{item:TSalesHistory}) => {
    const {buyerName,dateOfSelling,productName,quantity,totalPrice} = item || {};
    const classes = "p-4 border-b border-blue-gray-50";

    return (
        <tr key={productName} className="text-center">
          <td className={classes}>
            <Typography
            placeholder={''} 
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {productName}
            </Typography>
          </td>
          <td className={classes}>
            <Typography
            placeholder={''} 
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {quantity}
            </Typography>
          </td>
          <td className={classes}>
            <Typography
            placeholder={''} 
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              ${totalPrice}
            </Typography>
          </td>
          <td className={classes}>
            <Typography
            placeholder={''} 
              variant="small"
              color="blue-gray"
              className="font-medium"
            >
              {buyerName}
            </Typography>
          </td>
          <td className={classes}>
            <Typography
            placeholder={''} 
              variant="small"
              color="blue-gray"
              className="font-medium"
            >
              {dateOfSelling.split('T')[0]}
            </Typography>
          </td>
        </tr>
      );
};

export default SalesHistoryRow;