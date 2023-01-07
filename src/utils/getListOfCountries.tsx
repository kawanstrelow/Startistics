export function getListOfCountries(arr: []) {
    const newArr: any[] = []
    arr.map(country => newArr.push(country.name))
    return newArr
}