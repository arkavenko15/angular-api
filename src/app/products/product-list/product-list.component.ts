import { ProductsQuery } from './../models/product-query.model';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator/paginator';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  products: any[];
  productsQuery: ProductsQuery = {};
  productsLength: number = 0;

  constructor(private readonly productsService: ProductsService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.products = [];
  }

  ngOnInit() {

  }

<<<<<<< HEAD
  getProducts(query: ProductsQuery): void {
    this.productsQuery = query;
=======
  showSelectedQuery(query: ProductsQuery): void {
    console.log(query)
    this.productsService.getProducts(query).subscribe((products: ProductsService[]) => {
      console.log(products);
      
      this.products = products;
    })
>>>>>>> branch-08.11

    this.productsService.getProducts(this.productsQuery).subscribe((products: any) => {
      this.products = products.products;

      this.productsLength = products.length;
      console.log('ttt',products.length)
    });
  }

  paginationChange(pageEvent: PageEvent): void {
    // console.log('productsList', pageEvent);
    this.productsQuery.pageIndex = pageEvent.pageIndex+'';
    this.productsQuery.pageSize = pageEvent.pageSize.toString();
    this.getProducts(this.productsQuery)
  }



}
