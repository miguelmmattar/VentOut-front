import {
  GithubAuthProvider, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup,
} from 'firebase/auth';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../services/firebaseConfig';
import { googleAuth, githubAuth, facebookAuth } from '../../utils/authUtils';
/* import { signIn } from '../../services/authApi';
import { signUp } from '../../services/userApi'; */
import UserContext from '../../contexts/UserContext';
import { LogoWrapper } from '../../layouts/Auth';

export default function OAuth({ children, name, color }) {
  /* const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  async function handleOAuthSignIn() {
    let provider;
    let userData;

    if (name === googleAuth.name) {
      provider = new GoogleAuthProvider();
    }

    if (name === githubAuth.name) {
      provider = new GithubAuthProvider();
    }

    if (name === facebookAuth.name) {
      provider = new FacebookAuthProvider();
    }

    const result = await signInWithPopup(auth, provider);
    const { email } = result.user;
    const password = result.user.uid;

    try {
      userData = await signIn(email, password);

      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (error) {
      try {
        await signUp(email, password);
        userData = await signIn(email, password);

        setUserData(userData);
        toast('Login realizado com sucesso!');
        navigate('/dashboard');
      } catch (error) {
        toast('Não foi possível fazer o login!');
      }
    }
  } */

  return (
    <div>
      <LogoWrapper color={color}>{children}</LogoWrapper>
    </div>
  );
}
