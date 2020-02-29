export default {
    tabIsShow(context,flag = true){
        context.commit('tabIsShow',flag);
    },
    increment (context) {
        context.commit('increment');
      },
    asyncIncrement (context) {
        return new Promise(resolve => {
            setTimeout(() => {
                context.commit('increment');
                resolve();
            }, 1000)
        });
    }
}