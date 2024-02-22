export const customers = [
    { _id: "5b21ca3eeb7f6fbccd471818", name: "John" ,phone:2627378364 ,isGold:true},
    { _id: "5b21ca3eeb7f6fbccd471814", name: "Roman", phone:2627378362,isGold:false},
    { _id: "5b21ca3eeb7f6fbccd471820", name: "Brock" ,phone:2627378342 ,isGold:false},
    { _id: "5b21ca3eeb7f6fbccd471819", name: "Harry" ,phone:2627378356 ,isGold:true},
    { _id: "5b21ca3eeb7f6fbccd471815", name: "David", phone:2627378357,isGold:false},
    { _id: "5b21ca3eeb7f6fbccd471816", name: "Kane" ,phone:2627378358,isGold:false}
  ];
  
  export function getCustomers() {
    return customers.filter(c => c);
  }
  