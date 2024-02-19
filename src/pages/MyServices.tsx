import { FaArrowLeftLong, FaTrash } from "react-icons/fa6";
import {
  useDeleteServiceMutation,
  useGetAllPolishServicesQuery,
} from "../redux/features/Services/serviceApi";
import { TUser, selectCurrentToken } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hook";
import { verifyToken } from "../utils/verifyToken";
import { UpdateServiceStatusModal } from "../components/ui/UpdateServiceStatusModal";
import Swal from "sweetalert2";
import { Button, Tooltip } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

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
  const [deleteService] = useDeleteServiceMutation();

  const myServices = data?.data;

  // delete service
  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#880E4F",
      cancelButtonColor: "#48565E",
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteService(id).unwrap();
        if (res.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Service has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="h-auto bg-gradient-to-b  from-blue-gray-100">
      <div className="container mx-auto  pt-16 px-2 md:px-0">
        <h1 className="font-semibold text-3xl py-5 text-blue-gray-700">
          {user?.role === "buyer"
            ? "My Polishing Requests :"
            : "Review Services : "}
        </h1>
        <div className="myServices-table-container">
          {/* Table Head  */}
          <div
            className={`myServices-table-head ${
              user?.role === "buyer" ? "grid-cols-5" : "Table-res"
            }`}
          >
            <h2>Product Name</h2>
            <h2>Status</h2>
            <h2 className="hidden lg:block">Level Of Shine</h2>
            <h2 className="hidden md:block">Polishing Type</h2>
            {user?.role === "buyer" && <h2>Service ID</h2>}
            {user?.role === "seller" && (
              <h2 className="hidden xl:block">Customer</h2>
            )}
            {user?.role === "seller" && <h2>Actions</h2>}
          </div>

          {/* Table Body */}
          <div className="space-y-2">
            {myServices?.map((service: TService) => (
              <div
                key={service.serviceId}
                className={`myServices-table-row ${
                  user?.role === "buyer" ? "grid-cols-5" : "Table-res"
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
                  md:font-semibold rounded-full px-2  w-fit mx-auto text-sm`}
                >
                  {service.status}
                </h2>
                <p className="hidden lg:block">{service.level}</p>
                <p className="hidden md:block">{service.type}</p>
                {user?.role === "buyer" && <h2>{service.serviceId}</h2>}
                {user?.role === "seller" && (
                  <h2 className="hidden xl:block">{service.customerEmail}</h2>
                )}
                {user?.role === "seller" && (
                  <div className="flex justify-center gap-7">
                    {/* Update Status */}
                    <UpdateServiceStatusModal id={service._id} />
                    {/* Delete */}
                    <Tooltip content="Delete">
                      <button
                        onClick={() => handleDelete(service._id)}
                        className=" text-red-300 "
                        title="Delete Service"
                      >
                        <FaTrash className="size-4 md:size-5" />
                      </button>
                    </Tooltip>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {user?.role === "buyer" && (
          <NavLink to="/services">
            <Button
              placeholder={""}
              variant="outlined"
              className="mt-7 flex items-center gap-2 square-btn"
            >
              <FaArrowLeftLong size={16} />
              <span>Back</span>
            </Button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default MyServices;
