import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService, Project, TimelineItem } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  activeTab: 'experience' | 'education' = 'experience';
  private observer!: IntersectionObserver;

  skills    = this.data.skills;
  projects  = this.data.projects;
  timeline  = this.data.timeline;

  constructor(private data: DataService) {}

  get filteredTimeline(): TimelineItem[] {
    return this.timeline.filter(item => item.type === this.activeTab);
  }

  ngOnInit(): void {
    this.setupScrollReveal();
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }

  setTab(tab: 'experience' | 'education'): void {
    this.activeTab = tab;
  }

  onClickCard(project: Project): void {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    }
  }

  private setupScrollReveal(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => this.observer.observe(el));
    }, 200);
  }
}
