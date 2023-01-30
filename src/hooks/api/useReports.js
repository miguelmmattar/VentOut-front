import useAsync from '../useAsync';
import useToken from '../useToken';

import * as reportApi from '../../services/reportApi';

export default function useReports() {
  const token = useToken();

  const {
    loading: reportsLoading,
    error: reportsError,
    act: getReports,
  } = useAsync(() => reportApi.loadReports(token), false);

  return {
    reportsLoading,
    reportsError,
    getReports,
  };
}
