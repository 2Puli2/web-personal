import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService, Project } from '../../services/data.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
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
