<template>
    <div @click="send">{{ message }}</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
@Component({
    components: {}
})
export default class Helloworld1 extends Vue {
    @Prop({}) message!: string

    @Emit('send')
    send() {
        this.$bus.$emit('send', this.message)
        return this.message
    }
}
</script>
