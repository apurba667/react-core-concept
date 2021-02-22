import logo from './logo.svg';
import './App.css';

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
  const products = [
    {name:'Photoshop',Price:'$90.99'},
    {name:'Illastrator',Price:'$100.99'},

]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <h1 className= "" style = {style}>My heading : {person.name+ " " + person.job}</h1>
        <p>My first react paragraph</p>
        <h3 style={{backgroundColor:'cyan', color:'yellow'}}>Lala {person2.name +" " + person2.job} </h3>
        <Products name={products[0].name} Price={products[0].Price}></Products>
        <Products name={products[1].name}></Products>
        <Person name='Rubel'></Person>
        <Person name='Rahim'></Person>
      </header>
    </div>
  );

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
