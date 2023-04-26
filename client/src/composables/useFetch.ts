/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { ContentType } from './../enums/';

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const headers = ref({} as HeadersInit);

const DEFAULT_OPTIONS: RequestInit = {
    method: 'GET',
    headers: {
        'Content-Type': ContentType.JSON,
    },
    body: null,
};
const serverURL = '0.0.0.0:3000/';

let res: Response;
// TODO: Implement fetch with customizable options, validation, documentation,
export default async function useFetch(url: String, options: RequestInit = {}) {
    debugger;
    const mergedOptions = { ...DEFAULT_OPTIONS, ...options, };
    
    res = await fetch(serverURL + url);

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

}

function getData() {
    debugger;
    // Check the response content type and parse the response accordingly
    const ct = response.headers.get('content-type') as String;

    if (ct && ct.includes('application/json')) {
        return response.json();
    } else {
        return response.text();
    }
}

function setHeaders(headers: Headers) {
    
}
