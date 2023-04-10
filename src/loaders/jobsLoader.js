import { getShoppingCart } from "../utilities/fakedb";

const jobsLoader = async ()=>{
    const loadedJobs = await fetch('jobs.json')
    const jobs = await loadedJobs.json();
//if cart data is in database , you have to use async await
const storedCart = getShoppingCart();
// console.log(storedCart);

const savedCart = [];

for (const id in storedCart){
    // console.log(id)
       const addedProduct = jobs.find(pd=>pd.id===id);

       if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity =quantity ;
        savedCart.push(addedProduct)
       }
   }
return jobs ;

// console.log(savedCart)
//   return savedCart ; 

}
export default jobsLoader;