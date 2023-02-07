
<template>
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">

            <div>
                <span class="text-success fs-3 fw-bold">{{ day }}</span>
                <span class="mx-1 fs-3">{{ month }}</span>
                <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
            </div>

            <div>
                <button v-if="entry.id" class="btn btn-danger mx-2" @click="onDeleteEntry">
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>

                <button class="btn btn-primary">
                    Subir foto
                    <i class="fa fa-upload"></i>
                </button>
            </div>
        </div>

        <hr>

        <div class="d-flex flex-column px-3 h75">
            <textarea v-model="entry.text" placeholder="¿Qué sucedió hoy?"></textarea>
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/86/Tmurakam_-_IMG_1878_%28by%29.jpg"
            alt="entry-picture" class="img-thumbnail">

        <CustomFab icon="fa-save" @on:click="saveEntry" />

    </template>



</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import Swal from 'sweetalert2'
import getDayMonthYear from '../helpers/getDayMonthYear'

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: {
        CustomFab: defineAsyncComponent(() => import('../components/CustomFab.vue'))
    },
    data() {
        return {
            entry: null
        }
    },
    computed: {
        ...mapGetters('journal', ['getEntryById']),
        day() {
            const { day } = getDayMonthYear(this.entry.date)
            return day
        },
        month() {
            const { month } = getDayMonthYear(this.entry.date)
            return month
        },
        yearDay() {
            const { yearDay } = getDayMonthYear(this.entry.date)
            return yearDay
        }
    },
    methods: {
        ...mapActions('journal', ['updateEntries', 'createEntries', 'deleteEntry']),
        loadEntry() {
            let entry

            if (this.id === 'new') {
                entry = {
                    text: '',
                    date: new Date().getTime()
                }
            } else {
                entry = this.getEntryById(this.id)
                if (!entry) return this.$router.push({ name: 'no-entry' })
            }

            this.entry = entry
        },
        async saveEntry() {

            new Swal({
                title: 'Espere profavor',
                allowOutsideClick: true
            })

            Swal.showLoading()


            if (this.entry.id)
                //actualizar
                await this.updateEntries(this.entry)
            else {
                // crear una entrada
                const id = await this.createEntries(this.entry)

                //realizamos una redireccion
                this.$router.push({ name: 'entry', params: { id } })
            }

            Swal.fire('Guardado con exito', 'Entrada guardada con exito', 'success')
        },
        async onDeleteEntry() {

            const { isConfirmed } = await Swal.fire({
                title: 'Seguro de borrar?',
                text: 'Una vez eliminado no se puede recuperar',
                showDenyButton: true,
                confirmButtonText: 'Si, Estoy seguro'
            })

            if (isConfirmed) {
                new Swal({
                    title: 'Espere por favor ...',
                    allowOutsideClick: false
                })

                Swal.showLoading()
                await this.deleteEntry(this.entry.id)
                this.$router.push({ name: 'no-entry' })

                Swal.fire('Eliminado','','success')

            }

        }
    },
    created() {
        this.loadEntry()
    },
    watch: {
        //id(value, oldValue) {
        id() {
            this.loadEntry()
        }
    }

}
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;
    background: lightblue;
    border-radius: 10px;

    &:foucus {
        outline: none;
        background: gray;
    }

    &:active {
        background: lightcyan;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>