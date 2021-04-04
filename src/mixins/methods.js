export default {
    methods:{
        redirect(path){
            //'' to refresh page
            if(path=='') this.$router.go()
            if(path=='back') this.$router.back()
            if(path=='home') this.$router.push('/').catch(err => {err})
            else this.$router.push(`/${path}`).catch(err => { err})
        },
        makeToast(message,type,config=undefined){
            //Available Types:
            //default , info , success , error , warning
            if(message!=undefined){
                if(type=='default') this.$toast(`${message}`,config)
                else if(type=='info') this.$toast.info(`${message}`,config)
                else if(type=='success') this.$toast.success(`${message}`,config)
                else if(type=='error') this.$toast.error(`${message}`,config)
                else if(type=='warning') this.$toast.warning(`${message}`,config)
                else this.$toast(`${message}`,config)
            }
        },
    }
}