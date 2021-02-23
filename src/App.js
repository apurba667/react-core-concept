import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var person = {
    name : "Dr. Mahfuz",
    job : "Singer"
  }
  var person2 = {
    name : "Eva Rahman",
    job : "Singer"
  }
  var style = {
    color : 'red',
    backgroundColor : 'yellow'
  }
  const nayoks = ['Razzak', 'Jasim', 'Alomgir', 'Salman','Shuvo']
  const products = [
    {name:'Photoshop',Price:'$90.99'},
    {name:'Illastrator',Price:'$100.99'},
    {name: 'Premiar El', Price: '$240'}

]
const productNames = products.map(product => product.name)
console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <h1 className= "" style = {style}>My heading : {person.name+ " " + person.job}</h1>
        <p>My first react paragraph</p>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
          <li>{products[0].name}</li>
        </ul>
        {
          products.map(pd =><Products product={pd}></Products>)
        }
        <h3 style={{backgroundColor:'cyan', color:'yellow'}}>Lala {person2.name +" " + person2.job} </h3>
        <Products product = {products[0]}></Products>
        <Products product= {products[1]}></Products>
        <Person name='Rubel'></Person>
        <Person name='Rahim'></Person>
        <Counter></Counter>
        <Users></Users>
      </header>
    </div>
  );

}
function Counter(){
  const [count, setCount] =useState(10);
  const handelDeprese = () =>{
    const newCount = count-1;
    setCount(newCount);
  }
  const handerIncrease = () =>{
    const newCount = count +1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handelDeprese}>Decrease</button>
      <button onClick={handerIncrease}>Increase</button>
    </div>
  )
}
function Users(){
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return (
    <div>
      <h3>Dynamic Users :{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
        {/* {
          users.map(user => <li>{user.email}</li>)
        } */}
      </ul>
    </div>
  )
}

function Products(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height : '200px',
    width: '200px',
    float:'left'
  }
  const {name,price}=props.product;
  return(
    <div style={productStyle}>
      <h2>{props.name}</h2>
      <h1>{props.Price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  const personStyle ={
    border:'2px solid red',
    margin: '20px'
  }
  console.log(props);
  return (
  <div style={personStyle}>
    <h1> Name : {props.name}</h1>
    <h3>Hero of the year</h3>
  </div>
  )
}
export default App;
