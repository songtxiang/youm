export default {
    increment (state, n = 1) {
        state.count += n;
    },
    decrease (state) {
        state.count --;
    },
    tabIsShow(state,flag = true){
        state.tabIsShow = flag
    }
}