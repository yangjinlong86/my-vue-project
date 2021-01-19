<template>
    <div>
        <input type='button' @click="show_my_value()" value='test @click'/>

        <input type='button' v-on:click="show_my_value()" value='test v-on:click'/>
    </div>
</template>

<script>
export default {
    data(){
        return {
            message: 'hello, vue! this message come from virable.'
        }
    },
    methods: {
        show_my_value: function(){
            alert('message: ' + this.message);
        }
    }
}
</script>

 
<style>
.hi{
    color: red;
    font-size: 20px;
}
</style>
