import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    scenarios: {
        e: {
            executor: 'constant-vus',
            vus: 1000,
            duration: '30m',
            exec: 'testScenario',
        }
    },
};

export function testScenario() {
    const url = 'http://localhost:3000/employer/updateEmployer'; // Ajuste a URL conforme necessário

    const uniqueName = `Pedro-${Math.floor(Math.random() * 10000)}`;

    const payload = JSON.stringify({
        id: "5fb4e027-7f22-4c79-9f07-8879aa90191d",
        name: uniqueName,
        phoneNumber: "619991",
        age: "12",
        email: "Pedro@gmail.com"
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    let response = http.put(url, payload, params);

    check(response, {
        'is status 200': (r) => r.status === 200,
    });

    sleep(1);
}
