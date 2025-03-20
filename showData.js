import searchData from "./API_HarryPotter/getDataApi.js";

async function seeData() {
    const data = await searchData();
    let div = document.getElementById("box");

    data.forEach(e => {
    
        let pe = document.createElement("p");
        let img = document.createElement("img");
        img.setAttribute('src', e.image)
        img.setAttribute('width', '100px')
        img.setAttribute('height', '150px')


        pe.innerHTML = e.house;
        div.appendChild(pe);
        div.appendChild(img)
    });
}

export default seeData;