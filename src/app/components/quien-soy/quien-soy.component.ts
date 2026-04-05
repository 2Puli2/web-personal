import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class QuienSoyComponent implements OnInit {
  isVisible = false;

  ngOnInit(): void {
    setTimeout(() => (this.isVisible = true), 100);
  }
}
