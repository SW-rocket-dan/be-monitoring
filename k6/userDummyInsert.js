import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 100, // 동시 가상 사용자 수 x명
  iterations: 10000,
};

export default function () {
  const res = http.get('http://localhost:8080/dummy/user?count=100'); // 요청 보낼 URL
  
  check(res, {
    'status is 200': (r) => r.status === 200, // 응답 상태 확인
  });
}