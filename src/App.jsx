import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from "./assets/components/mycards"
import Statevariable from './assets/components/Statevariable'


function App() {
  const [count, setCount] = useState(0)
   localStorage.setItem("myName", "Sanele");
   localStorage.setItem("Tall", false);
   localStorage.setItem("myAge", 20);
   let person ={race:"black", gender:"female",name:"Sanele",place:"empangeni"};
   localStorage.setItem('testObject', JSON.stringify(person));
   let color =["black","yellow","blue"];
   localStorage.setItem('color',JSON.stringify(color));
   

   let house = {
typeofhouse:"Deached House",
year:"5y old",
realtor:"Tiffany Heffner",
bedavalible:"3Bedrooms",
price:"$ 750,000",
address:"742 Evergreen Terrace",
realtorPhon:"(555) 555-4341",
bathroom:"2 ",
bedrooms:"3",
url:"../src/house.jpeg"
 
   }
   localStorage.setItem('house',JSON.stringify(house))

   let Houseforsale =[

   {
      typeofhouse:"Deached House 1",
      year:"1y old",
      realtor:"Sizwe Mnguni",
      bedavalible:"3Bedrooms",
      price:"$ 950,000",
      address:"404 greenwood",
      realtorPhon:"(+27) 457-4329",
      bathroom:"2 ",
      bedrooms:"3"  ,
      // image:"./src/assets/house2.jpg",
    },
     {
      typeofhouse:"Deached House 2",
      year:"2y old",
      realtor:"Michalle Govender",
      bedavalible:"3Bedrooms",
      price:"$ 850,000",
      address:"4000 west street",
      realtorPhon:"(+27) 207-4341",
      bathroom:"2 ",
      bedrooms:"3"
    },
     {
      typeofhouse:"Deached House 3",
      year:"8y old",
      realtor:"Veronica keys",
      bedavalible:"3Bedrooms",
      price:"$ 100,000",
      address:"301 Dr pixly",
      realtorPhon:"(+27) 9135-4341",
      bathroom:"2 ",
      bedrooms:"3"
     },
     {
      typeofhouse:"Deached House 4",
      year:"3y old",
      realtor:"Thuso dhlomo",
      bedavalible:"3Bedrooms",
      price:"$ 100,000",
      address:"301 Dr pixly",
      realtorPhon:"(+27) 9135-4341",
      bathroom:"2 ",
      bedrooms:"3",
     }
   ]
   localStorage.setItem('Houseforsale',JSON.stringify(Houseforsale));
   const newhouse = localStorage.getItem("Houseforsale")
   console.log(newhouse)
   

   function Create(newlist){
  
  const List = JSON.parse(newhouse) ||[];
   
  let newObject =  {
    typeofhouse:"Deached House 4",
    year:"8y old",
    realtor:"asanda zulu",
    bedavalible:"3Bedrooms",
    price:"$ 800,000",
    address:"301 Dr pixly",
    realtorPhon:"(+27) 9135-4341",
    bathroom:"2 ",
    bedrooms:"3"
   }
   List.push(newlist)
  const Update = JSON.stringify(List);
  localStorage.setItem("List",Update);
   console.log(Update)
    
   }

   function  read(){

   }

   function Update(){

   }

   function Delete(){
    
   }
  return (
    <>
      <Cards accommodation={house} />
      <Cards accommodation ={Houseforsale[0]}/>
      <Cards accommodation ={Houseforsale[1]}/>
      <Cards accommodation ={Houseforsale[2]}/>

      <Statevariable/>
    </>
  )
}

export default App
