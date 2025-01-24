import { Component, OnInit } from '@angular/core';
import { ApiServeService } from '../../../services/api-serve.service';
import { LocalApicallService } from '../../../services/local-apicall.service';


@Component({
  selector: 'app-test-localapi',
  templateUrl: './test-localapi.component.html',
  styleUrl: './test-localapi.component.css'
})

export class TestLocalapiComponent implements OnInit {
  data: string = ''; // Variable to store the API response

  constructor(private apiService: LocalApicallService) {}

  ngOnInit(): void {
    // Call the API and handle the response
    this.apiService.getData().subscribe({
      next: (response: string) => {
        this.data = response; // Assign the response to the `data` variable
      },
      error: (error) => {
        console.error('Error fetching data:', error); // Log any errors
      }
    });
  }
}