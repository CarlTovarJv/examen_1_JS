import url from "./url.js"

async function searchData() {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Error al obtener los datos", response.status);
    }

    return await response.json();
}

export default searchData;
