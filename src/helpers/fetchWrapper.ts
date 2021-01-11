const fetchWrapper = (input: RequestInfo, init?: RequestInit) =>
    fetch(input, {
        headers: {
            'Content-Type': 'application/json',
        },
        ...init,
    }).then(r => r.json());

export default fetchWrapper;
