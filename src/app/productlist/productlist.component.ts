import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})



export class ProductListComponent {
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  public columnDefs: ColDef[] = [
    { field: 'id'},
    { field: 'name'},
    { field: 'brandName' },
    {field: 'quantity'}
    
  ];
  public productListHeaders=['ID','Name','Price','Brand','Quantity','Action']
  public productList=[
    {
      id:'P111',
      name:'Samsung TV ',
      price:100000,
      brandName:'Samsung',
      quantity:100,
    },
    {
      id:'P112',
      name:'Apple iPhone 14',
      price:70000,
      brandName:'Apple',
      quantity:50,
    },
    {
      id:'P113',
      name:'LG Washing Machine',
      price:16000,
      brandName:'LG',
      quantity:20,
    }
  ]

  SellItems(product:any)
  {
    for(let i=0;i<this.productList.length;i++)
    {
      if(this.productList[i].id==product.id)
      {
        if(this.productList[i].quantity>0)
          this.productList[i].quantity=this.productList[i].quantity - 1;
        else
        alert("Product out of stock !!")
      }
    }
  }
}
