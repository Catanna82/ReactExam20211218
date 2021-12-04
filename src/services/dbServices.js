const URL = 'http://localhost:3030';

const getFetch = (uri) => {
    return fetch(URL + uri)
        .then(r => r.json())
};

const postFetch = (uri, input) => {
    return fetch(URL + uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(input)
    }).then(r => r.json());
};

export {
    getFetch,
    postFetch
}