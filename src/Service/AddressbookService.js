import axios from 'axios'


class AddressbookService {
    baseUrl = 'http://localhost:8080/addressbook'

    baseUrlCreate = "http://localhost:8080/addressbook/create"

    addPerson = (person) => {

        return axios.post(this.baseUrlCreate, person)
    }

    getAllContacts = () => {
        return axios.get(`${this.baseUrl}` + "/getall")
    }

    delete = (id) => {
        axios.delete(`${this.baseUrl}` + `/delete_by_id/${id}`)
    }

    getContactById = (id) => {
        return axios.get(`${this.baseUrl}` + "/get_by_id/" + `${id}`)
    }

    updatePerson = (id, person) => {

        return axios.put(`${this.baseUrl}` + "/update/" + `${id}`, person)
    }
}

export default new AddressbookService();