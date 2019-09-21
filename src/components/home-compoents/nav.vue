<template id='navbar'>
   
       <div class='navbar'><span></span> <input type="text" placeholder="寻找宝贝店铺"></div>
 
</template>

<script >
export default {

}

</script>

<style scoped>
.navbar {
    background-color:rgb(252, 131, 84);
    width: 100%;
    height: 40px;
    line-height: 40px;
    position: fixed;
    top:0;
    left: 0;
    z-index: 99;
    padding:5px 0 5px 0; 
}
.navbar input::-webkit-input-placeholder{
  color:white;
  text-align: center;
  font-size:10px
}
 .navbar input {
  
  margin-bottom: 0;
 
  float: right;
  width: 86%;
  margin-right: 9px;
  height: 30px;
  background-color: rgb(246, 79, 12);
  border:0;
  
}

 .navbar span {
  display: block;
  width: 42px;
  height: 30px;
  float:left;
  background: url('../../assets/tao.png');
  background-repeat: no-repeat;
  background-size: 27px 20px;
  background-position: 9px center;
}  
</style>