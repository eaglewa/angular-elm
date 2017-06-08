import {Component, Injectable, OnInit} from '@angular/core';
import {SellerService} from "../../service/sellerService";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
@Injectable()
export class HeaderComponent implements OnInit {

  constructor(private sellerService:SellerService) { }

  ngOnInit() {
    let obj:object = this.sellerService.getSeller();
    console.log("获取seller", obj);
  }

}
