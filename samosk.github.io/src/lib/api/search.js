export function search(term) {
    return fetch(
        `https://demo.dataverse.org/api/search?q=` + term
    ).then((e) => e.json())
}