(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   var carImages = document.querySelectorAll(".data-ref"),
       carModel = document.querySelector(".modelName"),
       carPrice = document.querySelector(".priceInfo"),
       carDesc = document.querySelector(".modelDetails"),
       appliedClass;

   function changeElements() {

     let objectIndex = carData[this.id];

     console.log("Fired")

     //first, remove any info that's already populating the chosen fields
     carModel.classList.remove(appliedClass);
     carPrice.classList.remove(appliedClass);
     carDesc.classList.remove(appliedClass);

     //Then, populate with the new info
     carModel.classList.add(this.id);
     carPrice.classList.add(this.id);
     carDesc.classList.add(this.id);

     carModel.textContent = objectIndex.model;
     carPrice.textContent = objectIndex.price;
     carDesc.textContent = objectIndex.description;

     //change the opacity of the clicked image
     



     //Last, change the data held in applied class so it knows what to remove next click
     appliedClass = this.id;
   };

   carImages.forEach(function(element, index){
     element.addEventListener('click', changeElements, false)
   });

})();
