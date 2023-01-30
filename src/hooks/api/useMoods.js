import useAsync from '../useAsync';
import useToken from '../useToken';

import * as moodApi from '../../services/moodApi';

export default function useMoods() {
  const token = useToken();

  const {
    data: moods,
    loading: moodsLoading,
    error: moodsError,
    act: getMoods,
  } = useAsync(() => moodApi.loadUserMoods(token), false);

  return {
    moods,
    moodsLoading,
    moodsError,
    getMoods,
  };
}
