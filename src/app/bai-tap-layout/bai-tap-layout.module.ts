import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BtFooterComponent } from "../buoi1/bt-layout/bt-footer/bt-footer.component";
import { BtHeaderComponent } from "../buoi1/bt-layout/bt-header/bt-header.component";
import { BtLayoutComponent } from "../buoi1/bt-layout/bt-layout.component";
import { BtSliderComponent } from "../buoi1/bt-layout/index/bt-slider/bt-slider.component";
import { BtItemComponent } from "../buoi1/bt-layout/index/index-content/bt-item/bt-item.component";
import { IndexContentComponent } from "../buoi1/bt-layout/index/index-content/index-content.component";
import { IndexComponent } from "../buoi1/bt-layout/index/index.component";

@NgModule({
  declarations: [
    // noi quan ly danh muc cac component
    BtLayoutComponent,
    BtHeaderComponent,
    IndexComponent,
    BtFooterComponent,
    BtSliderComponent,
    IndexContentComponent,
    BtItemComponent,
  ],
  imports: [CommonModule],
  exports: [BtLayoutComponent], //xuat component ra cho cac module import module nay co the su dung
})
export class BaiTapLayoutModule {}
