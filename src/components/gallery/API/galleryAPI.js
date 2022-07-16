// import fetch from "node-fetch";

const fake_data = [
    {breeds: Array(0), id: 'MjAwOTQzMg', url: 'https://cdn2.thecatapi.com/images/MjAwOTQzMg.gif', width: 500, height: 281},
 {breeds: Array(0), id: 'MjAwNjg1Ng', url: 'https://cdn2.thecatapi.com/images/MjAwNjg1Ng.gif', width: 160, height: 160},
 {breeds: Array(0), id: 'MTk4MDEwNQ', url: 'https://cdn2.thecatapi.com/images/MTk4MDEwNQ.gif', width: 245, height: 138},
 {breeds: Array(0), id: 'MTk0MDMyMw', url: 'https://cdn2.thecatapi.com/images/MTk0MDMyMw.gif', width: 240, height: 137},
 {breeds: Array(0), id: 'MTkzMTU5Nw', url: 'https://cdn2.thecatapi.com/images/MTkzMTU5Nw.gif', width: 475, height: 266},
 {breeds: Array(0), id: 'MTkzMDA2Nw', url: 'https://cdn2.thecatapi.com/images/MTkzMDA2Nw.gif', width: 500, height: 333},
 {breeds: Array(0), id: 'MTkyNzQ3NA', url: 'https://cdn2.thecatapi.com/images/MTkyNzQ3NA.gif', width: 400, height: 300},
 {breeds: Array(0), id: 'MTkyMTcwNg', url: 'https://cdn2.thecatapi.com/images/MTkyMTcwNg.gif', width: 500, height: 211},
 {breeds: Array(0), id: 'MTkxODY3NA', url: 'https://cdn2.thecatapi.com/images/MTkxODY3NA.gif', width: 500, height: 226},
 {breeds: Array(0), id: 'MTkxNTY3MA', url: 'https://cdn2.thecatapi.com/images/MTkxNTY3MA.gif', width: 500, height: 300},
 {breeds: Array(0), id: 'MTkxMDc1MA', url: 'https://cdn2.thecatapi.com/images/MTkxMDc1MA.gif', width: 265, height: 300},
 {breeds: Array(0), id: 'MTkwNzQzOQ', url: 'https://cdn2.thecatapi.com/images/MTkwNzQzOQ.gif', width: 500, height: 370},
 {breeds: Array(0), id: 'MTkwNTgyNg', url: 'https://cdn2.thecatapi.com/images/MTkwNTgyNg.gif', width: 500, height: 280},
 {breeds: Array(0), id: 'MTkwMjIxNg', url: 'https://cdn2.thecatapi.com/images/MTkwMjIxNg.gif', width: 320, height: 225},
 {breeds: Array(0), id: 'MTg5NTY1Nw', url: 'https://cdn2.thecatapi.com/images/MTg5NTY1Nw.gif', width: 250, height: 250},
 {breeds: Array(0), id: 'MTg5NDg1MA', url: 'https://cdn2.thecatapi.com/images/MTg5NDg1MA.gif', width: 240, height: 226},
{breeds: Array(0), id: 'MTg5Mzc3NQ', url: 'https://cdn2.thecatapi.com/images/MTg5Mzc3NQ.gif', width: 320, height: 240},
{breeds: Array(0), id: 'MTg5MzYyMg', url: 'https://cdn2.thecatapi.com/images/MTg5MzYyMg.gif', width: 320, height: 240},
{breeds: Array(0), id: 'MTg3OTc3OQ', url: 'https://cdn2.thecatapi.com/images/MTg3OTc3OQ.gif', width: 200, height: 310},
{breeds: Array(0), id: 'MTg3MTgxMw', url: 'https://cdn2.thecatapi.com/images/MTg3MTgxMw.gif', width: 250, height: 145}]

const fake_data_breeds =[
 {id: 'abys', name: 'Abyssinian'},
{id: 'aege', name: 'Aegean'},
{id: 'abob', name: 'American Bobtail'},
 {id: 'acur', name: 'American Curl'},
 {id: 'asho', name: 'American Shorthair'},
 {id: 'awir', name: 'American Wirehair'},
 {id: 'amau', name: 'Arabian Mau'},
{id: 'amis', name: 'Australian Mist'},
 {id: 'bali', name: 'Balinese'},
{id: 'bamb', name: 'Bambino'},
 {id: 'beng', name: 'Bengal'},
 {id: 'birm', name: 'Birman'},
 {id: 'bomb', name: 'Bombay'},
 {id: 'bslo', name: 'British Longhair'},
 {id: 'bsho', name: 'British Shorthair'},
 {id: 'bure', name: 'Burmese'},
 {id: 'buri', name: 'Burmilla'},
 {id: 'cspa', name: 'California Spangled'},
 {id: 'ctif', name: 'Chantilly-Tiffany'},
 {id: 'char', name: 'Chartreux'},
 {id: 'chau', name: 'Chausie'},
 {id: 'chee', name: 'Cheetoh'},
 {id: 'csho', name: 'Colorpoint Shorthair'},
 {id: 'crex', name: 'Cornish Rex'},
 {id: 'cymr', name: 'Cymric'},
 {id: 'cypr', name: 'Cyprus'},
 {id: 'drex', name: 'Devon Rex'},
 {id: 'dons', name: 'Donskoy'},
 {id: 'lihu', name: 'Dragon Li'},
 {id: 'emau', name: 'Egyptian Mau'},
 {id: 'ebur', name: 'European Burmese'},
 {id: 'esho', name: 'Exotic Shorthair'},
 {id: 'hbro', name: 'Havana Brown'},
 {id: 'hima', name: 'Himalayan'},
 {id: 'jbob', name: 'Japanese Bobtail'},
 {id: 'java', name: 'Javanese'},
 {id: 'khao', name: 'Khao Manee'},
 {id: 'kora', name: 'Korat'},
 {id: 'kuri', name: 'Kurilian'},
 {id: 'lape', name: 'LaPerm'},
 {id: 'mcoo', name: 'Maine Coon'},
 {id: 'mala', name: 'Malayan'},
 {id: 'manx', name: 'Manx'},
 {id: 'munc', name: 'Munchkin'},
 {id: 'nebe', name: 'Nebelung'}]

export const requestGet = async (dataObj) => {

    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(fake_data)
        },500)
    })

    // let types = dataObj.type
    // let limit = dataObj.limit
    // let breedID = dataObj.breedID
    // let page = 0
    //
    //
    // console.log("FETCH")
    // console.log("Types", dataObj.types)
    // console.log("LIM", dataObj.limit)
    // console.log("BREED", dataObj.breedID)
    //
    //     const url = `https://api.thecatapi.com/v1/images/search?mime_types=${types}&page=${page}&limit=${limit}&order=DESC&breed_id=${breedID}`;
    // console.log("URL", url)
    //     let response = await fetch(url, {
    //         method: "GET",
    //         withCredentials: true,
    //         headers: {
    //             "content-Type": "application/json",
    //             "x-api-key": "1a47e138-6a44-4723-933c-0e7fd2675591",
    //         },
    //     })
    //         .then(resp => resp.json())
    //         .then(data => {
    //             return data
    //         })
    //         .catch(error => {
    //             console.log("err")
    //         })
    //     return await  response
}

export const requestGetBreeds = async () => {

    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(fake_data_breeds)
        },500)
    })
    // const url = `https://api.thecatapi.com/v1/breeds`;
    // console.log("URL", url)
    // let response = await fetch(url, {
    //     method: "GET",
    //     withCredentials: true,
    //     headers: {
    //         "content-Type": "application/json",
    //         "x-api-key": "1a47e138-6a44-4723-933c-0e7fd2675591",
    //     },
    // })
    //     .then(resp => resp.json())
    //     .then(data => {
    //         return data
    //     })
    //     .catch(error => {
    //         console.log("err")
    //     })
    //
    // return await  response
}