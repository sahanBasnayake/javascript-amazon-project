export const cart = [];

export function addToCart(productId){
  let matchingItem;

      cart.forEach((CartItem)=>{
        if(productId === CartItem.productId){
          matchingItem = CartItem;
        }
      });

      if(matchingItem){
        matchingItem.quantiy += 1;
      }else{
          cart.push({
          productId: productId,
          quantiy: 1
        });
      }
}