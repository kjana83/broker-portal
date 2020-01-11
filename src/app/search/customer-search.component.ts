import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'customer-search',
  templateUrl: './customer-search.component.html'
})
export class CustomerSearchComponent implements OnInit {
  customerSearchForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.customerSearchForm = this.fb.group({
      company: new FormControl('aviva'),
      lastName: new FormControl(),
      branch: new FormControl('A-10'),
      postalCode: new FormControl(),
      policyNumber: new FormControl(),
    });
  }
  submit() {
    this.router.navigate(['/bms/search-results']);
  }
}
