Vue.component('users', {
    template: `
    <section class="users">
        <section v-if="!selectedUser">
            <ul>
                <li v-for="(user,idx) in users" v-on:click="onSelectedUser(user.id)">
                <img v-bind:src="'../../img/img-users/'+ user.imgId +'.png'">
                    {{ user.name }}
                    <button v-on:click="removeUser(user.id, $event)">X</button>
                </li>
            </ul>
            <button v-on:click="toggleModal" class="btnAdd">Add User</button>
            <form v-if="isModalAddUserOpen" class="addUserModal" v-on:submit="onAddUser">
                <label for="nickname-input">Set Nickname</label>
                <p v-if="isNameTaken" class="input-msg">This nickname is already taken.</p> 
                <div class="container-flex">
                    <input v-model="setNickname" v-on:input="onNameInput" id="nickname-input" autocomplete="off">
                    <button v-bind:disabled="isNameTaken">Add User</button>
                </div>
                <button v-on:click="toggleModal" type="button" class="btnCancel">Cancel</button>
            </form>
        </section>
        <section v-else >
        <div class="info-user">
            <div>
                <h2>{{selectedUser.name}}</h2>
                <h4 v-for="movie in selectedUser.movies">{{movie}}</h4>
            </div>
            <div>
                <li> 
                <img v-bind:src="'./img/img-users/'+ selectedUser.imgId +'.png'">
                    {{ selectedUser.name }}
                </li>
            </div>
        </div>
        <button class="btnSwich" v-on:click="swichUser()">Swich User</button>
        </section>
    </section>`,
    data() {
        return {
            setNickname: '',
            isNameTaken: false,
            isModalAddUserOpen: false,
            selectedUser: null,
            users: [{ imgId: 1, id: 'p' + (Date.now() % 1000 + 1), name: 'noy', movies: ['Harry Potter', 'Twilight'] },
                { imgId: 2, id: 'p' + (Date.now() % 1000 + 2), name: 'eli', movies: ['News', 'Noyshabo my beuaty'] },
                { imgId: 3, id: 'p' + (Date.now() % 1000 + 3), name: 'ela', movies: ['Harry Potter', 'BobSpong'] },
                { imgId: 4, id: 'p' + (Date.now() % 1000 + 4), name: 'ayalla', movies: ['Ori', 'My sister'] }
            ]
        }
    },
    created() {

    },
    destroyed() {

    },
    methods: {
        onSelectedUser(id) {
            this.selectedUser = this.users.find((user) => { return user.id === id });
        },
        removeUser(id, $event) {
            $event.stopPropagation();
            this.users = this.users.filter((user) => {
                return user.id !== id;
            });

        },
        toggleModal() {
            this.isModalAddUserOpen = !this.isModalAddUserOpen;
        },
        onNameInput(event) {
            // event.target = who's call that event -> in this case it the input
            // this.setNickname = event.target.value; in the template: v-model:"setNickname"
            const isExist = this.users.some((user) => { return user.name === this.setNickname });
            this.isNameTaken = isExist;
        },
        onAddUser(ev) {
            ev.preventDefault();
            this.users.push({
                imgId: (Date.now() % 7 + 1),
                id: 'p' + (Date.now() % 1000 + 1),
                name: this.setNickname,
                movies: ['News', 'Noyshabo my beuaty']
            });
            this.isModalAddUserOpen = false;
            this.setNickname = '';
        },
        swichUser() {
            this.selectedUser = null;
        }

    },

    computed: {


    }
})