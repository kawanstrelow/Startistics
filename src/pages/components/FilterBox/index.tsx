import axios from "axios";
import { useEffect, useState } from "react";
import { FilterBoxContainer } from "../../../styles/components/filterbox";
import { getListOfCountries } from "../../../utils/getListOfCountries";

export function FilterBox() {

    const [countriesList, setCountriesList] = useState<string[]>([])

    async function getAllCountries() {
        await axios.get('https://restcountries.com/v2/all')
            .then(res => setCountriesList(getListOfCountries(res.data)))
    }

    useEffect(() => {
        getAllCountries()
    }, [])

    return (
        <FilterBoxContainer>
            <div>
                <span>Upload Date: </span>
                <select name="uploadDate" id="uploadDate-select">
                    <option value="lastday">Last day</option>
                    <option value="lastweek">Last week</option>
                    <option value="lastmonth">Last month</option>
                    <option value="lastyear">Last year</option>
                </select>
            </div>
            <div>
                <span>País de upload: </span>
                <select name="countryOfUpload" id="countryOfUpload-select">
                    {countriesList.map(country => 
                        <option key={country} value={country}>{country}</option>
                    )}         
                </select>
            </div>
        </FilterBoxContainer>

    )
}