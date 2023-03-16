import React from 'react';
import Home from './compoents/Home';
import './App.css'

let name:string; // it has also the Any type where we can literally can give  anything to assign that variable 
let age:number  | string;
let isMale:boolean;
let hobbies:string[]
let role:[number,string]


// type Person= {
//   name:string,
//   age:number
// };


// let person:Person= {
//   name:"hrithik",
//   age:45
// }
// age="true";


// void defines Undefined | where as the never defines nothing
// let namkaran:(name:string)=> void;


// function printName(name:string){
//   console.log(name)
// }
// printName("hrithik")


interface Person{
  name:string;
  age?:number;
}

// interface Guy extends Person {
//   proffession:string,
// }
// We  can directly use the Property of the different components directly by extanding it to the new Interface


type X= Person &  {  // in this we are using the Property of the Interface of the Person
  a:string;
  b:number;
}




role= [45,"ht"]
function App() {
  return (
    <div>
      Hello world 
      <Home/> 
    </div>
  );
}

export default App;
