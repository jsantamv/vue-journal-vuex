// export const myAction = async ({ commit }) => {
// }

import journalApi from "@/api/journal.api"

export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get('/entries.json')
    const entries = []
    for (let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries', entries)
}

export const updateEntries = async ({ commit }, entry) => { // entry debe de ser un parametro
    commit('setIsLoading', true)

    // extraer solo lo que necesitan // -id
    const { id, ...dataSave } = entry

    // await journalApi.put(path.json, dataToSave)
    await journalApi.put(`/entries/${id}.json`, dataSave)

    // Commint de una mutation => updateEntry, 
    // Spread del entry para pasarlo por valor
    commit('updateEntry', { ...entry })

    commit('setIsLoading', false)
}

export const createEntries = async ({ commit }, entry) => {
    commit('setIsLoading', true)

    const { ...dataToSave } = entry
    const { data } = await journalApi.post('/entries.json', dataToSave)

    dataToSave.id = data.name
    commit('addEntry', entry)
    
    commit('setIsLoading', false)
    return data.name
}