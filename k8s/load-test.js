import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 10 }, // Ramp-up to 10 users over 30 seconds
    { duration: '30s', target: 10 },  // Stay at 10 users for 1 minute
    { duration: '30s', target: 0 },  // Ramp-down to 0 users over 30 seconds
  ],
};

export default function () {
  let res = http.get('https://bold.servebeer.com');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
