import { Car } from "./Car";
import Event from "./EventHandling";
function Garage(props) {
  const carName = "Mustang";
  const carInfo = [
    {
      name: "Ferrari",
      model: "f12",
      color: "Red",
    },
    {
      name: "BMW",
      model: "Benz",
      color: "Black",
    },
    {
      name: "Mustang",
      model: "Ford",
      color: "Matte-Black",
    },
  ];
  return (
    <>
      {/* <Car brand = "ford"/>
        <Car brand = {carName} /> */}
        <h2>{props.children}</h2>
      {carInfo.map((data) => {
        return (
          
          <Car key={data.name} brand={data}>
            This is my Car
          </Car>
         
         
        );
      })}
      <div>
      <Event>EventHandling Component</Event>
      </div>
    </>
  );
}
export default Garage;
