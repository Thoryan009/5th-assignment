function getInputValueById(id){
    const value = parseInt(document.getElementById(id).value) 
    return value;
}

function getInnerTextAmount(id){
     const value = parseInt(document.getElementById(id).innerText) 
    return value;
}

function clickedBtn( input, donateAmount, title)
{
        
   let inputValue = getInputValueById(input)
   if(isNaN(inputValue) || inputValue === 0)
   {   document.getElementById(input).value = '';
        return alert('Please enter a valid amount...!!!')
   }
   const currentDonateAmount = getInnerTextAmount(donateAmount)
   const donateTitle = document.getElementById(title).innerText
   const currentAmount = getInnerTextAmount('totalAmount')

   if(inputValue > currentAmount){
     document.getElementById(input).value = '';
        return alert("You don't have sufficient balance")
   }

   my_modal_1.showModal()



   const totalDonateAmount = currentDonateAmount + inputValue;
   const newCurrentAmount = currentAmount - inputValue;

   document.getElementById(donateAmount).innerText = totalDonateAmount;
   document.getElementById('totalAmount').innerText = newCurrentAmount;
    document.getElementById(input).value = '';

    const date = new Date()
    const historySection =  document.getElementById('historySection');
   const div = document.createElement('div')
   div.innerHTML =
   `
   <div class="border border-gray-200 rounded-lg m-3 ">
                <div class="p-5 space-y-3">
                   <h1 class="font-bold text-lg">${inputValue} Taka is ${donateTitle}</h1>
                   <p class="text-gray-500">Date : ${date}</p>
                </div>
   `
   historySection.appendChild(div);

    // return alert(`Thank you for Donation ${inputValue} taka`)

}