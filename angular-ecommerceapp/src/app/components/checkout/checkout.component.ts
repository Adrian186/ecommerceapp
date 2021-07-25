import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CheckoutService} from "../../services/checkout.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutForm = new FormGroup({
    customerForm: new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl()
    }),
    shippingAddressForm: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      country: new FormControl(),
      zipCode: new FormControl()
    }),
    creditCardForm: new FormGroup({
      type: new FormControl(),
      nameOnCard: new FormControl(),
      cardNumber: new FormControl(),
      cvv2Number: new FormControl(),
      expirationMonth: new FormControl(),
      expirationYear: new FormControl()
    })});

  constructor(private checkoutService: CheckoutService) {};

  ngOnInit(): void {

  };

  onSubmit() {
    console.log(this.checkoutForm.value);
  }
}
