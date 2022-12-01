<template>
  <div class="MainSlide">
    <hooper
      :itemsToShow="3"
      :infiniteScroll="true"
      :autoPlay="true"
      :playSpeed="2000"
    >
      <slide class="slide1">slide 1</slide>
      <slide class="slide2">slide 2</slide>
      <slide class="slide3">slide 3</slide>
      <slide class="slide4">slide 4</slide>
      <slide class="slide5">slide 5</slide>
       <slide class="slide6">slide 6</slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </div>
</template>

<style>
.MainSlide {
  height: 500px;
}
.hooper {
  height: 350px;
}
.slide1 {
  background-color: red;
}
.slide2 {
  background-color: rgb(255, 123, 0);
}
.slide3 {
  background-color: rgb(255, 238, 0);
}
.slide4 {
  background-color: rgb(0, 255, 34);
}
.slide5 {
  background-color: rgb(168, 238, 255);
}
.slide6 {
  background-color: rebeccapurple;
}
</style>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination
} from "hooper";
import "hooper/dist/hooper.css";
export default {
  name: "MainSlide",
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination
  }
};
</script>