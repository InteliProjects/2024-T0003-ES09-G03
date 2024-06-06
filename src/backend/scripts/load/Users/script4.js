//  10.000 usuários, 15 minutos;
import http from 'k6/http';
import { check, sleep } from 'k6';
const id = "ae13cff2-56fe-4141-ae4d-34e34fdd714e"


export const options = {
  vus: 10000,
  duration: '900s',
}

const params = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export default function () {
  let response = http.get(`http://localhost:3000/employer/customer/${id}`, params);

  check(response, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(10)
}
