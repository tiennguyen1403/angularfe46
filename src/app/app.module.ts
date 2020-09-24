import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { Buoi1Component } from "./buoi1/buoi1.component";
import { HeaderComponent } from "./buoi1/header/header.component";
import { ContentComponent } from "./buoi1/content/content.component";
import { SideBarComponent } from "./buoi1/side-bar/side-bar.component";
import { BaiTapLayoutModule } from "./bai-tap-layout/bai-tap-layout.module";
import { DataBindingModule } from "./data-binding/data-binding.module";
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Buoi1Component,
    HeaderComponent,
    ContentComponent,
    SideBarComponent,
    //các component sử dụng (lẫn nhau) trong module này
  ],
  imports: [
    BrowserModule,
    BaiTapLayoutModule,
    DataBindingModule,
    // nơi để import các module khác vào module này
  ],
  providers: [],
  bootstrap: [AppComponent], //nơi chưa component sử dụng trong index.html
})
export class AppModule {}
