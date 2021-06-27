import { calls } from '../data';

class CallsService {
  getCalls = () =>
    new Promise(function (resolve) {
      setTimeout(resolve, 300, calls);
    });
}

const callsService = new CallsService();

export default callsService;
