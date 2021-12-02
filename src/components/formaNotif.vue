<template>
    <v-select
                  :items="formasNotif"
                  item-text="nombre"
                  label="Forma de Notificacion"
                  required
                  v-model="idsFormaNotificacionContacto"
                  multiple
                  return-object
                ></v-select>
</template>

<script>
  export default {
    data: () => ({
      formasNotif:[],
    }),
    methods:
    {
       finalizar: function() 
      {
        
        this.$emit('update:idsFormaNotificacionContacto', this.idsFormaNotificacionContacto.map(x=>x.id))
        this.dialog = false
      },
      
      getNotif: function () {
                fetch(process.env.VUE_APP_HOST+"/formas-de-noti", {
                    method: "GET",
                })
                    .then(response => response.json())
                    .then(datos => {
                         this.formasNotif=datos
                    })
            },
    },
    beforeMount()
    {
      this.getNotif()
    },
  }
</script>