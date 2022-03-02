import axios from 'axios'

const sampleService = {
    getSample: (payload: any) => axios.get(`https://api.empireflippers.com/api/v1/listings/list`)
}

export default sampleService