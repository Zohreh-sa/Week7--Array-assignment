console.log("Hello there");

const menuDatabase = [
    ['Papadum', 20, 'vegetarian'],
    ['Pakora', 50, 'meat'],
    ['Tandoori Chicken', 60, 'meat'],
    ['Samosa', 50, 'vegetarian'],
    ['Butter Chicken', 139, 'meat'],
    ['Chicken Korma', 129, 'meat'],
    ['Chicken Vindaloo', 149, 'meat'],
    ['Saag Lamb', 130, 'meat'],
    ['Lam Tikka Masala', 159, 'meat'],
    ['Yellow Daal Tadka', 119, 'vegetarian'],
    ['Biryani', 129, 'vegetarian'],
    ['Gulab Jamun', 55, 'dessert'],
    ['Mango Kulfi', 35, 'dessert'],
    ['Rasmalai', 60, 'dessert'],
];

console.log(menuDatabase);

//After some months of your restaurant being open, you realised that the last element in the menu hasn’t been sold in the last 4 months so you decide to remove it from the menu, use an array method to remove the last element of an array and save it in a variable called: removedMenuItem. 
const removeMenuItem= menuDatabase.pop(-1);
console.log(removeMenuItem);

//Due to inflation you have gone through your finances and you realised that you need to increase all the menu prices by 10%. To do this we want to create a new array (called increasedMenuDatabase) containing all the menu items with the mentioned price increase.

const increasedMenuDatabase=menuDatabase.map(item =>{
    let updatePrice =[...item];
    updatePrice[1]=updatePrice[1]*1.1;
    return updatePrice;
});
console.log(increasedMenuDatabase);




//A customer asks you about how many vegetarian dishes you have in the menu, for this you might want to filter the menu and get the amount of items filtered by the type: ‘vegetarian’. Call this variable: amountVegetariantDishes.

const amountVegetariantDishes=menuDatabase.filter(eachChildArray=>{

    return eachChildArray.includes("vegetarian");
}).length;

console.log("Vegetarian dishes are",amountVegetariantDishes);



//There’s a table that ordered all the dishes containing meat (1x time each dish), and they are ready to pay. Use the reduce method to get the total value of all the dishes that contain meat so that the customer can pay you. Call this variable: totalAmountMeatDishes

const totalAmountMeatDishes = increasedMenuDatabase.filter(dish=> dish[2]==="meat").reduce((totalAmount,dish)=>{
    return totalAmount+dish[1];

},0);

 console.log(totalAmountMeatDishes);


