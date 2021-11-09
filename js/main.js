console.log('hi');
import './cmp/weather.cmp.js';
import './cmp/count-down.cmp.js';
import './cmp/users.cmp.js';

const options = {
    el: '#app',
    template: `
    <section class="app-root">
        <show-time></show-time>
        <hr>
        <count-down v-on:due="timerFinish"></count-down>
        <users></users>
    </section>

    `,
    methods: {
        timerFinish() {
            console.log('Timer Finish');
        }

    },

}

new Vue(options)
