import {defineComponent, reactive} from 'vue';

export default defineComponent({
    name: 'App',

    setup() {
        const state = reactive({
            count: 0
        });
        const add = () => {
            state.count++;
        };
        return () =>
            <>
                <div class="container">
                    <button onClick={add}>点我</button>
                    {state.count}
                </div>
            </>;
    }
});
