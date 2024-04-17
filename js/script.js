const { createApp } = Vue;

createApp({

  data() {
    return {
     message:"Ciao utente benvenuto nella mio primo script scritto con l'ausilio di vue",
     linkImg: "./img/image.jpg",
     altImg: "Panorama",
    };
  },


}).mount("#app");