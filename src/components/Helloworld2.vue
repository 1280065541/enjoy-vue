<template>
    <div>{{ message }}</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
    components: {}
    // inject: ['text']
})
export default class Helloworld2 extends Vue {
    @Prop({}) message!: string

    created() {
        // this.$parent.$on('send', (message: string) => {
        //     console.log(message)
        // })
        // this.$bus.$on('send', (message: string) => {
        //     console.log(message)
        // })
    }
}
</script>
