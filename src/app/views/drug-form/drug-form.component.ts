import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-drug-form',
  templateUrl: './drug-form.component.html',
  styleUrls: ['./drug-form.component.less']
})
export class DrugFormComponent {

  drugForm : FormGroup;
  drugsFormGroups : FormGroup[] = [];

  constructor(private fb:FormBuilder) { 
    this.drugForm = this.fb.group({
      drugs : this.drugsFormGroups
    });
  }

  addDrug(){
    let drugName:string = "drug " + this.drugsFormGroups.length; 
    this.drugsFormGroups.push(
     this.fb.group({
       name:[drugName],lotNumber:[''],expirationDate:['']
     })
    );
  }

  removeDrug(formGroup:FormGroup){
    this.drugsFormGroups = this.drugsFormGroups.filter(fg=>fg !== formGroup);
  }
}
