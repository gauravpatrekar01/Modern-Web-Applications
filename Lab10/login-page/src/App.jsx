import Paragraph from './components/Paragraph.jsx'
import InputComponent from './components/inputComponent.jsx'
import ButtonComponent from './components/buttonComponent.jsx'

// What is the react js and class component(Render and return) and function component(render)
// meaning of lifecycle method 

function App() {
  return (
    <div style={{margin: '200px',padding: '20px', border: '1px solid #ccc', width: '300px',backgroundColor: '#748d9a'}}>
      <Paragraph style={{ color: 'blue',fontSize: '18px', margin: '0 0 0 95px' , fontWeight: 'bold'}} data="Registration Form" ></Paragraph>
      {/* <Paragraph style={{ color: 'green' }} data="This is a React component." ></Paragraph> */}
      <InputComponent inputtype="text" placeholder="Enter your name" style={{color: 'black', border: '1px solid #bf1010', marginTop: '10px',width: '85%'}}> </InputComponent>
      <br/>
      <InputComponent inputtype="text" placeholder="Enter your username" style={{color: 'black', border: '1px solid #bf1010', marginTop: '10px',width: '85%'}}> </InputComponent>
      <br/>
      <InputComponent inputtype="email" placeholder="Enter your Email" style={{color: 'black', border: '1px solid #1ac038', marginTop: '10px',width: '85%'}}> </InputComponent>
      <br/>
      <InputComponent inputtype="number" placeholder="Insert OTP" style={{color: 'black', border: '1px solid #281ac0', marginTop: '10px',width: '85%'}}> </InputComponent>
      <br/>
      <ButtonComponent buttonText="Verify OTP" onClick={() => {
        alert('OTP is verified!');
        
        <Paragraph style={{ color: 'green',fontSize: '12px', margin: '10px 0 0 95px' }} data="OTP is verified successfully!" ></Paragraph>
      }} style={{color: 'white', backgroundColor: 'red', border: 'none', padding: '10px 20px', cursor: 'pointer' ,marginTop: '10px',marginLeft: '100px'}}> </ButtonComponent>
      <InputComponent inputtype="password" placeholder="Enter your password" style={{color: 'black', border: '1px solid #1ac038', marginTop: '10px',width: '85%'}}> </InputComponent>
      <br/>
      <InputComponent inputtype="password" placeholder="Confirm your password" style={{color: 'black', border: '1px solid #1ac038', marginTop: '10px',width: '85%'}}> </InputComponent>
      <br/>
      <ButtonComponent buttonText="Register" onClick={() => {
        alert('Form is submitted!');
      }} style={{color: 'white', backgroundColor: 'blue', border: 'none', padding: '10px 20px', cursor: 'pointer' ,marginTop: '10px',marginLeft: '110px'}}> </ButtonComponent>
      <Paragraph style={{ color: 'black',fontSize: '9px', margin: '10px 0 0 95px' }} data="Designed By Gaurav Patrekar" ></Paragraph>
    </div>
  )
}

export default App
