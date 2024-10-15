import http from 'k6/http';
import { check } from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 100 },  // 1분 동안 VU를 100명까지 올림
        { duration: '1m', target: 500 },  // 1분 동안 VU를 500명까지 올림
        { duration: '1m', target: 1000 }, // 1분 동안 VU를 1000명까지 올림
        { duration: '1m', target: 0 },    // 1분 동안 VU를 0명으로 줄임
    ],
};

export default function () {
    let resSingleton = http.get('http://localhost:8080/singletonRepository');
    check(resSingleton, {
        'status is 200': (r) => r.status === 200,
    });

    // let resNonSingleton = http.get('http://localhost:8080/nonsingletonRepository');
    // check(resNonSingleton, {
    //     'status is 200': (r) => r.status === 200,
    // });
}