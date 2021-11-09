Vue.component('countDown', {
    template: ` 
    <div class="countDown">
                <span>{{getMin}}</span>:<span v-bind:class="changeRed">{{getSec}}</span>
    </div>
    `,
    data() {
        return {
            timer: (Date.now() + 1000 * 20) - Date.now()
                //timer is 00:15
        }
    },

    created() {
        this.interval = setInterval(() => {
            this.timer -= 1000;
            if (this.timer <= 0) {
                this.playSound();
                clearInterval(this.interval);
            }
        }, 1000);
    },

    destroyed() {
        clearInterval(this.interval);
    },

    methods: {
        playSound() {
            this.$emit('due');
            const sound = new Audio('./sound/time-over.mp3');
            sound.play();
        }

    },
    computed: {
        getMin() {
            const mins = new Date(this.timer).getMinutes();
            // const mins = time.getMinutes();
            // if(mins===0) 
            return mins < 10 ? '0' + mins : '' + mins;
        },
        getSec() {
            const sec = new Date(this.timer).getSeconds();
            return sec < 10 ? '0' + sec : '' + sec;
        },
        changeRed() {
            return { redtxt: +this.getMin == 0 && +(+this.getSec <= 10) }
        }
    }
});