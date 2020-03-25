export const state = () => {

}
export const actions = {
    async payAmount({ commit }, payload) {
        return await this.$axios.$post('/api/pay', payload)
    }
}
export const mutations = {

}
export const getters = {

}