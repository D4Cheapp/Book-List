export async function getBooks() {
    return await fetch('http://localhost:3001/books')
        .then(data => data)
            .catch(error => console.error(error));
}