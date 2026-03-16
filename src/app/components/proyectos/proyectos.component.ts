import { Component, OnInit } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  isVisible = false;

  projects: Project[] = [
    {
      title: 'Portfolio Personal',
      description: 'Diseño y desarrollo de este portfolio con estética cyberpunk moderna usando Angular y SCSS.',
      tags: ['Angular', 'TypeScript', 'SCSS']
    },
    {
      title: 'Aplicación Interactiva',
      description: 'Plataforma web interactiva con animaciones fluidas y diseño centrado en la experiencia del usuario.',
      tags: ['JavaScript', 'CSS3', 'HTML5']
    },
    {
      title: 'Dashboard Creativo',
      description: 'Panel de control con visualización de datos y diseño minimalista para gestión de proyectos.',
      tags: ['Angular', 'Charts', 'API REST']
    }
  ];

  ngOnInit(): void {
    setTimeout(() => (this.isVisible = true), 100);
  }
}
