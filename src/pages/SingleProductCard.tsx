import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  IconButton,
} from "@material-tailwind/react";
import { TProduct } from "./ALLProducts";

const SingleProductCard = ({ product }: { product: TProduct }) => {
  const {
    brand,
    color,
    isAuthentic,
    model,
    name,
    price,
    quantity,
    size,
    style,
    uniqueId,
    photoUrl,
  } = product || {};

  return (
    <Card placeholder={""} className="w-full max-w-[26rem] shadow-lg">
      {/* header  */}
      <CardHeader
        placeholder={""}
        floated={false}
        color="blue-gray"
        className="shadow-sm"
      >
        <img
          className="w-full  h-72 object-cover "
          src={photoUrl}
          alt="ui/ux review check"
        />
        <div className="card-gradient" />
        {/* badge  */}
        <IconButton
          placeholder={""}
          size="sm"
          variant="text"
          className="!absolute top-2 right-7 rounded-full"
        >
          {isAuthentic && (
            <Badge color="amber" content="Authentic" className="font-semibold">
              {""}
            </Badge>
          )}
        </IconButton>
      </CardHeader>
      {/* body  */}
      <CardBody placeholder={""}>
        <div className="mb-3 ">
          <h1 className="text-xl text-blue-gray-600">{name}</h1>
          <div className="border-b border-gray-300 my-5 w-2/3 mx-auto" />
          <div className="text-blue-gray-800 font text-sm space-y-">
            <p>
              Price : <span className="font-serif text-lg">$ {price}</span>
            </p>
            <p>Brand : {brand}</p>
            <p>Model : {model}</p>
            <p>Quantity : {quantity}</p>
            <p>Sizes : {size.join(",")}</p>
            <p>Style : {style}</p>
            <p>Color : {color}</p>
            <p>
              Unique ID :{" "}
              <span className="bg-amber-100 px-1 rounded-full selection:text-light-blue-800 selection:bg-amber-300">
                {uniqueId}
              </span>
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default SingleProductCard;
