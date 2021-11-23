<template>
    <div @click="test">test</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
    components: {}
})
export default class Index extends Vue {
    test() {
        console.log('测试')
    }
}
</script>

<style lang="scss" scoped></style>
