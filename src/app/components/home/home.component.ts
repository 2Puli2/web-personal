import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isVisible = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => (this.isVisible = true), 100);
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
