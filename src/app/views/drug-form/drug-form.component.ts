import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-drug-form',
  templateUrl: './drug-form.component.html',
  styleUrls: ['./drug-form.component.less']
})
export class DrugFormComponent implements OnInit {

  drugForm : FormGroup;
  drugsFormGroups : FormGroup[] = [];

  constructor(private fb:FormBuilder) { 
    this.drugForm = this.fb.group({
      drugs : this.drugsFormGroups
    });
  }

  ngOnInit(): void {
  }

  addDrug(){
    let drugName:string = "drug " + this.drugsFormGroups.length; 
    this.drugsFormGroups.push(
     this.fb.group({
       name:[drugName],lotNumber:[''],expirationDate:['']
     })
    );
    
    console.log(this.drugsFormGroups);
  }

  removeDrug(formGroup:FormGroup){
    console.log('remove ' + formGroup);
    this.drugsFormGroups = this.drugsFormGroups.filter(fg=>fg !== formGroup);

    //this.drugsFormGroups.pop(); 
  }
}
