export const state = () => {
    form: null
}
export const actions = {
    async payAmount({ commit }, payload) {
        try {
            const form = await this.$axios.$post('/api/pay', payload)
            commit("form", form)
        } catch (e) {
            console.log(e)
        }

    }
}
export const mutations = {
    form(state, payload) {
        state.form = payload;
    }
}
export const getters = {
    form: state => state.form
}