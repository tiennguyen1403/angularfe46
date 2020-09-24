import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataBindingComponent } from "./data-binding/data-binding.component";
//tai thu vien nao su dung twowayBinding
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [DataBindingComponent],
  imports: [CommonModule, FormsModule],
  exports: [DataBindingComponent],
})
export class DataBindingModule {}
