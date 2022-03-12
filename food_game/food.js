const arr1 = ['Potato Fries', 'Meatballs', 'Pasta', 'Boiled Eggs', 'Steak']

const arr2 = ['Choclate Sauce', 'Soy Sauce', 'Onion Sauce', 'Ketchup', 'Olive Oil'] 

const arr3 = ['Black pepper', 'Salt', 'Red pepper', 'Sage', 'Onion Powder'] 

function random_food(arr1)
{
  
return arr1[Math.floor(Math.random()*arr1.length)];
     
}

// Divider (So I dont get confused with the code) 

function random_food2(arr2)
{
  
return arr2[Math.floor(Math.random()*arr2.length)];
     
}

// 2nd Divider 

function random_food3(arr3)
{
  
return arr3[Math.floor(Math.random()*arr3.length)];
     
}

document.getElementById('Sup').innerHTML = random_food(arr1); 

document.getElementById('Suh').innerHTML = random_food2(arr2); 

document.getElementById('Sut').innerHTML = random_food3(arr3); 