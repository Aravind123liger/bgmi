import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from './accountContext';
import axios from "axios"
import {useNavigate, Link} from "react-router-dom"
import "./Signup.css"

export function SignupForm(props) {

  const { switchToSignin } = useContext(AccountContext);
  const history = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  try {
    await axios.post('http://localhost:8000/SignInForm', {
      name,
      email,
      password,
    })
      .then(res => {
        if (res.data === 'exist') {
          alert('User already exists');
        } else if (res.data === 'notexist') {
          history('/working', { state: { id: name } });
        }
      })
      .catch(e => {
        alert('Check your Details');
        console.log(e);
      });
  } catch (e) {
    console.log(e);
  }
}

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Full name" />
        <Input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
        <Input type="password"  onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
        <Input type="password" placeholder="Confirm password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        Already have an account?{" "}
        <BoldLink onClick={switchToSignin} href="#">
          Signin
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}