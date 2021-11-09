Vue.component('show-time', {
    template: `
    <article v-on:click="onDarkMode" class="show-time" v-bind:class="getBgTheme">
        <p>{{timeForDisplay}}</p>
        <img v-bind:src="getSeasonImg">
    </article>
    `,
    data() {
        return {
            time: new Date(),
            isDarkTheme: true,
            timeInterval: ''
        };
    },

    created() {
        this.timeInterval = setInterval(() => {
            this.time = new Date();
        }, 1000);
    },

    destroyed() {
        clearInterval(this.timeInterval)
    },

    methods: {
        onDarkMode() {
            this.isDarkTheme = !this.isDarkTheme;
        },
    },

    computed: {
        timeForDisplay() {
            return this.time.toLocaleTimeString();
        },
        getBgTheme() {
            return { 'dark': this.isDarkTheme, 'light': !this.isDarkTheme }
        },
        getSeasonImg() {
            const month = this.time.getMonth()
            if (month === 11 || month <= 1) return './img/winter.png';
            else if (month <= 4) return './img/summer.png';
            else if (month <= 7) return './img/spring.png';
            else return './img/autumn.png';
        }
    },
});