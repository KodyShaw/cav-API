const axios = require("axios");

//Object that can hold all the various API tokens and auth KEYS in one place
const AUTH_TOKEN = {
    cav: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRlN2I5YWY1NDk1NGMyZTUxMjU1NzQyYjFmZDA5ODJhZTc3MzFkMDNkMDljZmNlMTdmYzkzYjk5MjI0ZjU5MjZhZDY3MjNlNTFlYTNlMGQ0In0.eyJhdWQiOiIzIiwianRpIjoiZGU3YjlhZjU0OTU0YzJlNTEyNTU3NDJiMWZkMDk4MmFlNzczMWQwM2QwOWNmY2UxN2ZjOTNiOTkyMjRmNTkyNmFkNjcyM2U1MWVhM2UwZDQiLCJpYXQiOjE1NDE0MDcyMDUsIm5iZiI6MTU0MTQwNzIwNSwiZXhwIjoxNTcyOTQzMjA1LCJzdWIiOiIxMiIsInNjb3BlcyI6WyJ1c2VycyIsIm1pbHBhY3MiLCJyZWNvcmRzIl19.liF6-6FwdD4tzpiicoQ7dfT1uL_bWSnlR-WuG0DeaLSxuZ8EBtTXNB23z_McxSgFQzjsgNCKP8vUpipTaBpJGS4kMPdzWJSEhkpVdwRRWhYJtLSqTptBKA55_PcY6UUYV8FAu1HOeJSHguU7QNfCG8EXoJlE_26nhky2WA9A5GsItuUh7BYKtBXRkftegSonYN25pP9o-KXb-7CaoR_4uNnhAdybP-BGsoGPR7thhy27V39U2vbgjuvzrAMACC2rDYQ8fWnPazjnPYA5rD9TDRA85qIPO3HX-9GVNr5qz_nqua8s00sxmVPjhzJ-XHaLNdx9C8i72ONX0a1Y30XTOQ2fIH8lzcp5EvhtxtSgefTkq0z6rm0I791N31_W8C54K0Gx2j4rgOxKMcZLvwTDpp3byYGWpuBCP_ITH2j8AYvlXl7sd3Q9qGl0k2_RHR4tM0Mu6TVwrZNl93dNc3KNZMyQYYDLWnlbDXKvii5rT6bMzbIhXUdK5TZfsgi-pkiorD7tCnyAtpgOs1Ne66tk0EAOI6PyHekcUPYYi99Pb2CkcsR12MVQ2Yu38JIoScBsOy5PTPTNGuQHb-8DBmoMpaaM19sXs5penwgnKEO4crie8tujiDuE1L6h74rtXww89u_gOHu1HrIL8gCIU87BrE-x40iEHrdNa5IRbrzp_nU"
}

//Can add other axios.create Intances here to save code in long run
const instance = {
    cavRequest: axios.create({
        baseURL: "https://api.7cav.us/v1/",
        headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'aplication/json',
            'Authorization': 'Bearer ' + AUTH_TOKEN.cav
        },
    })
}

//Exports instance to be used by other files
module.exports = instance;