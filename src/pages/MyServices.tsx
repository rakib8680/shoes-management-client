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
    <div className="h-screen bg-gradient-to-b  from-blue-gray-100">
      <div className="container mx-auto  pt-16 ">
        <h1 className="font-semibold text-3xl py-5 text-blue-gray-700">
          My Polishing Requests :{" "}
        </h1>
        <div className="myServices-table-container">
          <div className="myServices-table-head">
            <h2>Product Name</h2>
            <h2>Status</h2>
            <h2>Level Of Shine</h2>
            <h2>Polishing Type</h2>
            <h2>Service ID</h2>
          </div>
          <div className="space-y-2 ">
            {myServices?.map((service: TService) => (
              <div key={service.serviceId} className="myServices-table-row">
                <h2>{service.productName}</h2>
                <h2
                  className={`
                  ${
                    service.status === "pending" &&
                    "bg-amber-300 text-light-blue-900"
                  } 
                  ${
                    service.status === "ongoing" &&
                    "bg-cyan-300 text-blue-gray-800"
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
                <p>{service.serviceId}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
