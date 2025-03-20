import searchData from "./API_HarryPotter/getDataApi.js";

async function seeData() {
    const data = await searchData();
    let div = document.getElementById("box");

    data.forEach(e => {
        let pe = document.createElement("p");
        pe.innerHTML = e.house;
        div.appendChild(pe);
    });
}

export default seeData;