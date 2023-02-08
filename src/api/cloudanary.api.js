import axios from 'axios'

const cloudanaryApi = axios.create({
    baseURL: 'https://api.cloudinary.com/v1_1/dlkeaojyg/image/upload'
})

export default cloudanaryApi