// export const myMutations = (state) => {

// }


export const setEntries = (state, entries) => {
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry = (state, entry) => {
    const idx = state.entries.map(e => e.id).indexOf(entry.id)
    state.entries[idx] = entry
}

export const addEntry = (state, entry) => {

    //agrego la nuevaentrada al inicio
    state.entries=[entry, ...state.entries]

    //estate => entries, que sea la primera

    //sacar del usuario de la ruta /new

    //await action

    // redirect to => ruta con el id nuevo
}

export const setIsLoading = (state, val) => {
    state.isLoading = val
}