import {Component, Injectable, OnInit} from '@angular/core';
import {SellerService} from "../../service/sellerService";
import {Seller} from "../../model/seller";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
@Injectable()
export class HeaderComponent implements OnInit {

  seller: Seller;

  constructor(private sellerService: SellerService) {

  }

  ngOnInit() {
    this.sellerService.getSeller().then(seller => {
      this.seller = seller
    });
  }

}
