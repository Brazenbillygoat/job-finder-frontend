
import './App.css';
import LoginContainer from './containers/LoginContainer'

const authorizeUser = (e, username, password) => {
  e.preventDefault();
  let userCreds = {
    username: e.currentTarget.elements[0].value, 
    password: e.currentTarget.elements[1].value
  }
  
  console.log(userCreds)
  // fetch('path TBD from Abdul', {
  //   method: ''
  // })
}

function App() {




  return (
    <div className="App">
      <LoginContainer 
        authorizeUser={authorizeUser}
      />
    </div>
  );
}

export default App;
