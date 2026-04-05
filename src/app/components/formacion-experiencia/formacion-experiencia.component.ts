import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, TimelineItem } from '../../services/data.service';

@Component({
  selector: 'app-formacion-experiencia',
  templateUrl: './formacion-experiencia.component.html',
  styleUrls: ['./formacion-experiencia.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class FormacionExperienciaComponent implements OnInit {
  isVisible = false;
  timeline: TimelineItem[];

  constructor(private data: DataService) {
    this.timeline = this.data.timeline;
  }

  ngOnInit(): void {
    setTimeout(() => (this.isVisible = true), 100);
  }
}
