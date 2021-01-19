<template>
    <div>
        <table>
            <tr v-for="blog in blogs">
                <td>{{blog.title}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: '博客列表',
            blogs: []
        }
    },
    mounted(){
        // $http 所有以 $开头的变量，都是vue的特殊变量，往往是vue框架自带． 
        // 这里的$http就是可以发起http 请求的对象.
        this.$http.get('api/interface/blogs/all').then((response) => {
            console.info(response.body)
            this.blogs = response.body.blogs
        }, (response)=>{
            console.error(response)
        });
    }
}
</script>