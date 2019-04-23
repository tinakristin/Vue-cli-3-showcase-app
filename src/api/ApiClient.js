import mock from './mock';
import api from './server';

const useMockService = (process.env.VUE_APP_NODE_ENV === 'testing'
  || process.env.VUE_APP_NODE_ENV === 'development') && !process.env.VUE_APP_USE_DEV_PROXY;

const apiClient = useMockService ? mock : api;

export default apiClient;
