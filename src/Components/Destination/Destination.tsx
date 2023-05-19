import { styled } from "styled-components";
import { useState, useEffect } from "react";
import { Type } from "../../type";
import axios from "axios";
import { Routes, Route, Link, useParams } from "react-router-dom";
import data from "../../../data.json";

const Destination = (): JSX.Element => {
  const [dataInfo, setDataInfo] = useState<any>(null);
  console.log(data);

  const params = useParams();
  const planetInfo = data.destinations.find(
    (item) => item.name.toLowerCase() === params.planets
  );

  console.log(planetInfo);
  return <></>;

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get<Type>("/data.json");
  //         setDataInfo(response.data);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  //   if (!dataInfo) {
  //     return <h1>Loading...</h1>; // Return null or any fallback component while data is loading
  //   }

  //   const destinationInfo = dataInfo.destinations.map((info, index) => {
  //     return (
  //       <DestinationCont key={index}>
  //         <img src={info.images["png"]} alt="" />
  //         <h1>{info.name}</h1>
  //         <p>{info.description}</p>
  //         <h3>{info.distance}</h3>
  //         <h4>{info.travel}</h4>
  //         <Link to={"/destinations"} />
  //         <Link to={"/destinations/mars"} />
  //       </DestinationCont>
  //     );
  //   });

  //   return (
  //     <>
  //      {destinationInfo[0]}
  //     </>
  //   );
};

export default Destination;

const DestinationCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  img {
    width: 40px;
    height: 40px;
  }

  a {
    border-radius: 50%;
    background-color: black;
    width: 20px;
    height: 20px;
  }
`;
