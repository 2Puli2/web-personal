import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.scss']
})
export class QuienSoyComponent implements OnInit {
  isVisible = false;

  ngOnInit(): void {
    setTimeout(() => (this.isVisible = true), 100);
  }
}
