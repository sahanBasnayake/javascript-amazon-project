export const cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantiy: 2
}, {
  productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantiy: 1
}];

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