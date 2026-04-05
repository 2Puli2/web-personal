import { Component, OnInit } from '@angular/core';
import { DataService, Project } from '../../services/data.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  isVisible = false;
  projects: Project[];

  constructor(private data: DataService) {
    this.projects = this.data.projects;
  }

  ngOnInit(): void {
    setTimeout(() => (this.isVisible = true), 100);
  }
}
