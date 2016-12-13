class Cart{
  //What is the first part of every class? Type it below.
  constructor (il, iq){
    this.itemList = il;
    this.itemQuantity = iq;
  }
  //Type the instance functions below this comment.
  addItem(i, q){

    this.itemList.push(i);
    this.itemQuantity.push(q);
  }
  totalCart(){
    var total = 0;

    for (let i = 0; i < this.itemQuantity.length; i++)
    {
      total += this.itemlist[i].price * this.itemQuantity[i].price;
      return total;
    }
  }

  subCart(days)
  {
    let subCart = new Cart([],[]);
    for (let i = 0; i < itemList.length; i++)
  }
}
