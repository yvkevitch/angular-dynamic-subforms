import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DrugFormComponent } from '../drug-form.component';

@Component({
  selector: 'app-one-drug',
  templateUrl: './one-drug.component.html',
  styleUrls: ['./one-drug.component.less']
})
export class OneDrugComponent {

  @Input() drugGroup : FormGroup;
  @Input() parentComponent : DrugFormComponent;

  constructor() { }

  removeDrug(){
    this.parentComponent.removeDrug(this.drugGroup);
  }

}
