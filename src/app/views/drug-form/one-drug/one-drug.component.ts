import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DrugFormComponent } from '../drug-form.component';

@Component({
  selector: 'app-one-drug',
  templateUrl: './one-drug.component.html',
  styleUrls: ['./one-drug.component.less']
})
export class OneDrugComponent implements OnInit {

  @Input() drugGroup : FormGroup;
  @Input() parentComponent : DrugFormComponent;

  constructor() { }

  ngOnInit(): void {
    console.log(this.drugGroup);
    console.log(this.parentComponent);
  }

  removeDrug(){
    console.log(this.drugGroup.controls['name'].value);
    this.parentComponent.removeDrug(this.drugGroup);
  }

}
