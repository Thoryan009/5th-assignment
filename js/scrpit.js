document.getElementById('btn1').addEventListener('click', function(){
    clickedBtn( 'input1', 'donateAmount1', 'title1');
})

document.getElementById('btn2').addEventListener('click', function(){
   clickedBtn( 'input2', 'donateAmount2', 'title2');
})

document.getElementById('btn3').addEventListener('click', function(){
   clickedBtn( 'input3', 'donateAmount3', 'title3');
})

document.getElementById('donateBtn').addEventListener('click', function(target){
   const donateSection = document.getElementById('donateSection');
   const historySection = document.getElementById('historySection');
   historySection.classList.add('hidden')
   donateSection.classList.remove('hidden')
   document.getElementById('donateBtn').classList.add('bg-lime-300')
      document.getElementById('historyBtn').classList.remove('bg-lime-300')
   historySection.classList.remove('bg-lime-300')

})

document.getElementById('historyBtn').addEventListener('click', function(){
   const donateSection = document.getElementById('donateSection');
   const historySection = document.getElementById('historySection');
   donateSection.classList.add('hidden')
   historySection.classList.remove('hidden')
    document.getElementById('donateBtn').classList.remove('bg-lime-300')
    document.getElementById('historyBtn').classList.add('bg-lime-300')
})