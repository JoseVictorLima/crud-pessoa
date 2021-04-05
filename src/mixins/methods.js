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
        fomatarData(data,formato,divisor){
            //Formats: "ddmmyyyy" , "mmddyyyy" , "yyyymmdd" 
            //Dividers: "/" , "-" , " "
            try{
              if(data!=undefined){
                  let novaData = new Date(data)
                  var dd = String(novaData.getDate()).padStart(2, '0');
                  var mm = String(novaData.getMonth() + 1).padStart(2, '0');
                  var yyyy = novaData.getFullYear();
                  if(formato=="ddmmyyyy") data = dd + `${divisor}` + mm + `${divisor}` + yyyy;
                  else if(formato=="mmddyyyy") data = mm + `${divisor}` + dd + `${divisor}` + yyyy;
                  else if(formato=="yyyymmdd") data = yyyy + `${divisor}` + mm + `${divisor}` + dd;
              }
            }catch(error){error}
            return data
          },
    }
}