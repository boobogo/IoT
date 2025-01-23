import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 200 }, // ramp up to 200 users
        { duration: '5m', target: 200 }, // stay at 200 users for 5 minutes
        { duration: '1m', target: 0 },   // ramp down to 0 users
    ],
};

export default function () {
    let res = http.get('http://bold.servebeer.com');
    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time is less than 500ms': (r) => r.timings.duration < 500,
    });
    sleep(1);
}