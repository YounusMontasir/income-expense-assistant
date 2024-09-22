// input field theke value nibo
function getInputValueById(id){
   return document.getElementById(id).value;
}
// innertext nibo
function getInnerTextById(id){
   return document.getElementById(id).innerText;
}
// global balance
    let count = 0;
// calculate expense function
document.getElementById('calculate').addEventListener('click', function(){
    const income = parseFloat(getInputValueById('income'))
    const software = parseFloat(getInputValueById('software'))
    const courses = parseFloat(getInputValueById('courses'))
    const internet = parseFloat(getInputValueById('internet'))
    count++;
    const totalExpense = software+courses+internet;
    const availableBalance = income - totalExpense;
    // check validation
    if(income <0)
        {
            document.getElementById('income-error').classList.remove('hidden')
        }
    if(software <0)
    {
        document.getElementById('software-error').classList.remove('hidden')
    }
    if(courses <0)
        {
            document.getElementById('courses-error').classList.remove('hidden')
        }
        if(internet <0)
            {
                document.getElementById('internet-error').classList.remove('hidden')
            }

    if(totalExpense>income)
    {
        document.getElementById('logic-error').classList.remove('hidden')
        return
    }
    else{
     // remove the hidden results section
     document.getElementById('results').classList.remove('hidden')

     document.getElementById('total-expenses').innerText = totalExpense;
     document.getElementById('balance').innerText = availableBalance;
     
     // history section
     const div = document.createElement('div')
     div.className = "p-3 border-l-2 border-indigo-500 bg-gray rounded-md"
     div.innerHTML = `
         <p class = "text-xs font-bold text-gray-600">Serial No:${count}</p>
         <p class = "text-xs text-gray-600">Date:${new Date().toLocaleDateString()}</p>
         <p class = "text-xs text-gray-600">Income:${income}</p>
         <p class = "text-xs text-gray-600">Expense:${totalExpense}</p>
         <p class = "text-xs text-gray-600">Balance:${availableBalance}</p>
 
     `
    const historyItemList = document.getElementById('history-list')
     historyItemList.insertBefore(div,historyItemList.firstChild)

    }
   
    
})

// savings calculate
document.getElementById('calculate-savings').addEventListener('click',function(){
    const income = parseFloat(getInputValueById('income'))
    const software = parseFloat(getInputValueById('software'))
    const courses = parseFloat(getInputValueById('courses'))
    const internet = parseFloat(getInputValueById('internet'))

    const totalExpense = software+courses+internet;
    const availableBalance = income - totalExpense;
    // input savings percentage value
    const savingsPercentage = parseFloat(getInputValueById('savings'))
    const savingsAmount = (availableBalance*savingsPercentage)/100;
    const remainingBalance = availableBalance - savingsAmount;
    
    document.getElementById('savings-amount').innerHTML = savingsAmount;
    document.getElementById('remaining-balance').innerHTML = remainingBalance;
    
    
})

// history section
const historyTab = document.getElementById('history-tab')
    historyTab.addEventListener('click',function(){
        // add button color on history tab
    historyTab.classList.add('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')

    // remove button color on assistant tab
    const assistantTab = document.getElementById('assistant-tab')
    assistantTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    assistantTab.classList.add('text-grey-600')
    // remove hidden class from expense history
    document.getElementById("history-section").classList.remove("hidden")
    // hide the expense-form
    document.getElementById("expense-form").classList.add('hidden')
})

// assistant section
const assistantTab = document.getElementById('assistant-tab')
     assistantTab.addEventListener('click',function(){
        // add button color on assistant tab 
    assistantTab.classList.add('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')

    // remove button color on history tab
    const historyTab = document.getElementById('history-tab')
    historyTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    historyTab.classList.add('text-grey-600')
    // add hidden class from expense history
    document.getElementById("history-section").classList.add("hidden")
    // hide the expense-form
    document.getElementById("expense-form").classList.remove('hidden')
})