import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.scss"],
})
export class DataBindingComponent implements OnInit {
  public title: String = "Cybersoft";

  thongTinSanPham: any = {
    tenSP: "iphone",
    soLuong: 15,
    donGia: 1000,
  };

  constructor() {}

  ngOnInit(): void {}

  renderPhim = () => {
    return {
      id: 1,
      name: "EndGame",
      img: "https://picsum.photos/300/300",
    };
  };

  //phuong thuc xu ly su kien tren giao dien
  changeTitle = (newTitle: String) => {
    this.title = newTitle;
  };
}
