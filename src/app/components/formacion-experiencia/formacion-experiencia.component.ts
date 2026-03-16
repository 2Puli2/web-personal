import { Component, OnInit } from '@angular/core';

interface TimelineItem {
  date: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-formacion-experiencia',
  templateUrl: './formacion-experiencia.component.html',
  styleUrls: ['./formacion-experiencia.component.scss']
})
export class FormacionExperienciaComponent implements OnInit {
  isVisible = false;

  timeline: TimelineItem[] = [
    {
      date: '2024 — Actualidad',
      title: 'Desarrollo Web Frontend',
      text: 'Especialización en Angular, TypeScript y diseño de interfaces modernas con enfoque en experiencia de usuario.'
    },
    {
      date: '2022 — 2024',
      title: 'Ingeniería de Software',
      text: 'Formación en fundamentos de programación, algoritmos, estructuras de datos y metodologías ágiles.'
    },
    {
      date: '2021 — 2022',
      title: 'Primeros pasos en desarrollo',
      text: 'Descubrimiento del mundo del desarrollo web. Primeros proyectos con HTML, CSS y JavaScript.'
    }
  ];

  ngOnInit(): void {
    setTimeout(() => (this.isVisible = true), 100);
  }
}
