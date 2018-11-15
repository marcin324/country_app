export const GET_COUNTRIES = 'GET_COUNTRIES'; // Listowanie państw
export const GET_COUNTRY = 'GET_COUNTRY'; // Informacje o jednym państwie
export const DELETE_COUNTRY = 'DELETE_COUNTRY'; // Usuwanie jednego państwa
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES'; // Szukanie państwa po nazwie
export const SET_CONTINENT = 'SET_CONTINENT'; // wyświetlanie państw według kontynentów

export function getCountries() {
    return {
        type: GET_COUNTRIES
    }
}

export function deleteCountry(id) {
    return {
        type: DELETE_COUNTRY,
        id
    };
}

export function getCountry(id) {
    return {
        type: GET_COUNTRY,
        id
    }
}

export function searchCountries(searchText) {
    return {
        type: SEARCH_COUNTRIES,
        searchText
    }
}

export function setContinent(name) {
    return {
        type: SET_CONTINENT,
        name
    }
}