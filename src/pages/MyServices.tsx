import { useGetAllPolishServicesQuery } from "../redux/features/Services/serviceApi";

type TService = {
  serviceId: string;
  productName: string;
  status: string;
  level: string;
  type: string;
};

const MyServices = () => {
  // start-from-here
  const { data } = useGetAllPolishServicesQuery(undefined);

  const myServices = data?.data;

  return (
    <div className="container mx-auto">
      <h1>My Polishing Requests</h1>
      <div className="flex flex-col justify-between bg-blue-gray-100 py-7 px-5  text-center rounded-md space-y-3">
        <div className="grid grid-flow-col  grid-cols-5 bg-blue-gray-400 font-bold text-blue-gray-900  py-3 rounded-md shadow-md">
          <h2>Product Name</h2>
          <h2>Status</h2>
          <h2>Level Of Shine</h2>
          <h2>Polishing Type</h2>
          <h2>Service ID</h2>
        </div>
        <div className="space-y-2 ">
          {myServices?.map((service: TService) => (
            <div
              key={service.serviceId}
              className={`grid grid-flow-col grid-cols-5 bg-blue-gray-50 rounded-md py-2 shadow-sm border border-blue-gray-200`}
            >
              <h2>{service.productName}</h2>
              <h2>{service.status}</h2>
              <p>{service.level}</p>
              <p>{service.type}</p>
              <p>{service.serviceId}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyServices;
