import { useState } from "react";
import Cards from "../components/cards";
import Data from '../dataDummy/data.json'

export default function Home() {

const [filteredData, setFilteredData]= useState(Data)

  return (
    <div style={styles.home}>
         {Data?.map((item) =>(
             <Cards item={item}/>
        ))}
    </div>
  );
}

const styles = {
    home:{
        width:'75%',
        margin:'auto',
        fontFamily: 'League Spartan',
    }
}