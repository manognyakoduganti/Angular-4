import {NgModule} from "@angular/core";
import {DropdownListDirective} from "./dropdown.directive";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    DropdownListDirective
  ],
  exports: [
    CommonModule,
    DropdownListDirective
  ]
})
export class SharedModule{

}
