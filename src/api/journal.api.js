import axios from 'axios'

/**
 * API de journal API
 */
const journalApi = axios.create({
    baseURL: 'https://vue-journal-fortem-course-default-rtdb.firebaseio.com'
})

export default journalApi