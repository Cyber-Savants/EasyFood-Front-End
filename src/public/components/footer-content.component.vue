<script>
export default {
  name: "footer-content"
}
</script>

<template>
  <div class="footer-container">
    <div class="flex align-items-center ml-8">
      <img src="../../assets/Logo-easy.png" alt="logo" style="width: 150px; height: 150px;"/>
    </div>
    <div class="flex flex-column align-items-center justify-content-center">
      <h3>Contáctanos:</h3>
      <p><i class="pi pi-send"/>  {{ 'authoring-phrase.email' }}</p>
      <p><i class="pi pi-phone"/>  {{ 'authoring-phrase.phone' }}</p>
      <p>Copyright &copy; 2024. Cyber Savants</p>
    </div>
    <div class="flex align-items-center justify-content-center mt-2 gap-5">
      <i class="pi pi-facebook hover:bg-black-alpha-20" style="font-size: 2.5rem"></i>
      <i class="pi pi-instagram hover:bg-black-alpha-20" style="font-size: 2.5rem"></i>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  width: 100%;
  margin: auto;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap:50px;
  background-color: #0A732F;
  color: white;
}
@media screen and (max-width:800px){
  .footer-container {
    width: 90%;
    grid-template-columns: repeat(1, 1fr);
    grid-gap:30px;
    padding: 35px 0px;
  }
}
</style>