import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { BsGoogle } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { ImFacebook } from 'react-icons/im';

import auth from '../services/firebaseConfig';
import Auth, { Divider, Line, OAuthWrapper } from '../layouts/Auth';

import logo from '../assets/images/ventout-logo.png';
import OAuth from '../components/Auth/OAuth';
import { facebookAuth, githubAuth, googleAuth } from '../utils/authUtils';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  return (
    <Auth>
      <div className="container">
        <img src={logo} alt="VentOut Logo" />
        <h2>LOGIN</h2>
        <form>
          <input type="text" id="email" placeholder="E-Mail" />
          <input type="text" id="password" placeholder="Password" />
          <input type="submit" value="LOGIN" />
        </form>

        <Divider>
          <Line />
          <h5>OR</h5>
          <Line />
        </Divider>

        <OAuthWrapper>
          <OAuth name={googleAuth.name} color={googleAuth.color}>
            <BsGoogle color={googleAuth.color} />
          </OAuth>

          <OAuth logo={githubAuth.logo} color={githubAuth.color}>
            <FiGithub color={githubAuth.color} />
          </OAuth>

          <OAuth logo={facebookAuth.logo} color={facebookAuth.color}>
            <ImFacebook color={facebookAuth.color} />
          </OAuth>
        </OAuthWrapper>

        <Link to="/sign-up">Not registered yet? Sign up here!</Link>
      </div>
    </Auth>
  );
}
