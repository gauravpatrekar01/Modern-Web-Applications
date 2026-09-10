import Paragraph from './components/Paragraph.jsx'
import InputComponent from './components/inputComponent.jsx'
import ButtonComponent from './components/buttonComponent.jsx'

// What is the react js and class component(Render and return) and function component(render)
// meaning of lifecycle method 

function App() {
  return (
    <div style={{margin: '200px',padding: '20px', border: '1px solid #ccc', width: '300px',backgroundColor: '#92cfee'}}>
      <Paragraph style={{ color: 'blue',fontSize: '18px', margin: '0 0 0 105px' , fontWeight: 'bold'}} data="Login Page" ></Paragraph>
      {/* <Paragraph style={{ color: 'green' }} data="This is a React component." ></Paragraph> */}
      <InputComponent inputtype="text" placeholder="Enter your username" style={{color: 'black', border: '1px solid #bf1010', marginTop: '10px',width: '85%'}}> </InputComponent>
      <br/>
      <InputComponent inputtype="password" placeholder="Enter your password" style={{color: 'black', border: '1px solid #1ac038', marginTop: '10px',width: '85%'}}> </InputComponent>
      <br/>
      <ButtonComponent buttonText="Login" onClick={() => {
        alert('Login button clicked!');
      }} style={{color: 'white', backgroundColor: 'blue', border: 'none', padding: '10px 20px', cursor: 'pointer' ,marginTop: '10px',marginLeft: '110px'}}> </ButtonComponent>
      <Paragraph style={{ color: 'black',fontSize: '9px', margin: '10px 0 0 95px' }} data="Designed By Gaurav Patrekar" ></Paragraph>
    </div>
  )
}

export default App
