import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/rental';
import { RentalService } from 'src/app/rental.service';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent implements OnInit{
rentals: Rental[]=[]

  constructor(public rentalService: RentalService) { }
  
  ngOnInit(): void {
  this.getAllRentals()
  }

  getAllRentals() {
    this.rentalService.getRentals().subscribe(results => {
      this.rentals = results
      console.log(results);
      
    })
   
    
  }
}
