import logo from './logo.svg';
import './App.css';
import {Button,  Form, Badge} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
  <Badge pill variant="primary">
    <h1>
    Hey! Welcome to my First React Application, Please register your visit!
    </h1>
   
  </Badge>{' '}
  </div>


 <Form style={{ margin: '500 px'}}>
   <Form.Group>
     <Form.Label>Email Adress</Form.Label>
     <Form.Control type='email' placeholder='Example@email.com'/>
      <Form.Text className="text-muted">
      </Form.Text>
   </Form.Group>

   <Form.Group>
     <Form.Label>Password</Form.Label>
     <Form.Control type='Password' placeholder='Password'/>
      <Form.Text className="text-muted">
      </Form.Text>
   </Form.Group>
 </Form>

 <Button variant="primary">Register !</Button>{' '}

      </header>
    </div>

    
  );
}

export default App;
