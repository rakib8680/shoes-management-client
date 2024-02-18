import { FaTrash } from "react-icons/fa6";
import { useGetAllPolishServicesQuery } from "../redux/features/Services/serviceApi";
import { TUser, selectCurrentToken } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hook";
import { verifyToken } from "../utils/verifyToken";
import { UpdateServiceStatusModal } from "./UpdateServiceStatusModal";

type TService = {
  _id: string;
  serviceId: string;
  productName: string;
  customerEmail: string;
  status: string;
  level: string;
  type: string;
};

const MyServices = () => {
  // get user role from token
  const token = useAppSelector(selectCurrentToken);
  let user: TUser | undefined;
  if (token) {
    user = verifyToken(token) as TUser;
  }

  // call api
  const { data } = useGetAllPolishServicesQuery(undefined);

  const myServices = data?.data;

  return (
    <div className="h-auto bg-gradient-to-b  from-blue-gray-100">
      <div className="container mx-auto  pt-16 ">
        <h1 className="font-semibold text-3xl py-5 text-blue-gray-700">
          {user?.role === "buyer"
            ? "My Polishing Requests :"
            : "Review Services : "}
        </h1>
        <div className="myServices-table-container">
          <div
            className={`myServices-table-head ${
              user?.role === "buyer" ? "grid-cols-5" : "grid-cols-6"
            }`}
          >
            <h2>Product Name</h2>
            <h2>Status</h2>
            <h2>Level Of Shine</h2>
            <h2>Polishing Type</h2>
            {user?.role === "buyer" && <h2>Service ID</h2>}
            {user?.role === "seller" && <h2>Customer</h2>}
            {user?.role === "seller" && <h2>Actions</h2>}
          </div>
          <div className="space-y-2">
            {myServices?.map((service: TService) => (
              <div
                key={service.serviceId}
                className={`myServices-table-row ${
                  user?.role === "buyer" ? "grid-cols-5" : "grid-cols-6"
                }`}
              >
                <h2>{service.productName}</h2>
                <h2
                  className={`
                  ${
                    service.status === "pending" &&
                    "bg-amber-200 text-light-blue-900"
                  } 
                  ${
                    service.status === "ongoing" &&
                    "bg-cyan-100 text-blue-gray-800"
                  } 
                  ${
                    service.status === "completed" &&
                    "bg-green-200 text-blue-gray-800"
                  } 
                  font-semibold rounded-full px-2  w-fit mx-auto text-sm`}
                >
                  {service.status}
                </h2>
                <p>{service.level}</p>
                <p>{service.type}</p>
                {user?.role === "buyer" && <h2>{service.serviceId}</h2>}
                {user?.role === "seller" && <h2>{service.customerEmail}</h2>}
                {user?.role === "seller" && (
                  <div className="flex justify-around">
                   <UpdateServiceStatusModal id={service._id} />
                    <button className=" text-red-300 " title="Delete Service">
                      <FaTrash size={19} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
