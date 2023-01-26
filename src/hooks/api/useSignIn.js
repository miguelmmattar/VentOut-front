import useAsync from '../useAsync';

import * as authApi from '../../services/authApi';

export default function useSignUp() {
  const {
    data: signInData,
    loading: signInLoading,
    error: signInError,
    act: signIn,
  } = useAsync((email, token) => authApi.signIn(email, token), false);

  return {
    signInData,
    signInLoading,
    signInError,
    signIn,
  };
}
