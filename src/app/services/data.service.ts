import { Injectable } from '@angular/core';

// ─── Interfaces compartidas ───────────────────────────────────────────────────

export interface Skill {
  name: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  gradient?: string;
  imageUrl?: string;
  orbitalVisual?: boolean;
}

export interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
  text: string;
  type: 'experience' | 'education';
  isUdemy?: boolean;
}

// ─── Servicio ─────────────────────────────────────────────────────────────────

@Injectable({ providedIn: 'root' })
export class DataService {

  readonly skills: Skill[] = [
    { name: 'Angular',      color: '#dd1b16' },
    { name: 'TypeScript',   color: '#3178c6' },
    { name: 'JavaScript',   color: '#f7df1e' },
    { name: 'HTML5',        color: '#e34f26' },
    { name: 'SCSS / CSS3',  color: '#cc6699' },
    { name: 'Spring Boot',  color: '#6db33f' },
    { name: 'Java',         color: '#f89820' },
    { name: 'MySQL',        color: '#003545' },
    { name: 'Git',          color: '#f05032' },
  ];

  readonly projects: Project[] = [
    {
      title: 'PokeRun',
      description: 'Aplicación móvil Android desarrollada como proyecto final de DAM. Fue un proyecto importante para poner en práctica lo aprendido y demostrarme que podía sacar adelante una aplicación completa.',
      tags: ['Java', 'Android', 'XML', 'DAM'],
      githubUrl: 'https://github.com/2Puli2/Pokerun',
      gradient: 'linear-gradient(135deg, rgba(217,116,195,0.14) 0%, rgba(0,212,255,0.14) 100%)',
      imageUrl: 'assets/images/pokerun.jpg'
    },
    {
      title: 'Aplicaciones internas corporativas',
      description: 'Trabajo en la evolución de aplicaciones web internas, aprendiendo a desenvolverme en un entorno profesional con Angular y Spring Boot mientras colaboro en nuevas funcionalidades y mejoras del día a día.',
      tags: ['Angular', 'Spring Boot', 'TypeScript'],
      gradient: 'linear-gradient(135deg, rgba(0,212,255,0.14) 0%, rgba(192,68,255,0.14) 100%)',
      imageUrl: 'assets/images/capgemini.png'
    },
    {
      title: 'Charcutería Los Molina',
      description: 'Web corporativa para un negocio local desarrollada de principio a fin. Me sirvió para seguir aprendiendo sobre maquetación, responsive, SEO y cómo enfocar una web pensada para un cliente real.',
      tags: ['Angular', 'TypeScript', 'SCSS', 'SEO', 'Responsive'],
      liveUrl: 'https://xarcuterialosmolina.com',
      githubUrl: 'https://github.com/2Puli2/xarcuteria-losmolina',
      gradient: 'linear-gradient(135deg, rgba(0,212,255,0.14) 0%, rgba(192,68,255,0.64) 100%)',
      imageUrl: 'assets/images/charcuteria.png'
    },
    {
      title: 'Web Personal',
      description: 'Mi portfolio personal, donde voy aplicando lo que aprendo y cuidando cada detalle para mostrar quién soy, cómo trabajo y cómo voy avanzando como desarrollador.',
      tags: ['Angular', 'TypeScript', 'SCSS', 'Responsive'],
      liveUrl: 'https://sergiopulidev.site',
      githubUrl: 'https://github.com/2Puli2/web-personal',
      orbitalVisual: true
    }
  ];

  readonly timeline: TimelineItem[] = [
    {
      date: 'Sep 2025 — Actualidad',
      title: 'Frontend / Fullstack Developer',
      subtitle: 'Capgemini',
      text: 'Estoy viviendo mi primera experiencia profesional participando en una aplicación web corporativa con Angular, Spring Boot. Es una etapa en la que estoy aprendiendo mucho sobre ritmo de trabajo, código compartido y desarrollo en equipo.',
      type: 'experience'
    },
    {
      date: '2025 — Actualidad',
      title: 'Desarrollo de proyectos propios',
      subtitle: 'Web y móvil',
      text: 'Compagino esta etapa con proyectos personales que me ayudan a practicar, equivocarme, mejorar y ganar soltura en desarrollo web tanto en frontend como en la parte más global de una aplicación.',
      type: 'experience'
    },
    {
      date: '2024 — 2026',
      title: 'CFGS en Desarrollo de Aplicaciones Multiplataforma',
      subtitle: 'Universae',
      text: 'Formación centrada en desarrollo de aplicaciones, bases de datos y programación orientada a objetos. Ha sido la base desde la que he ido construyendo mis conocimientos y mi confianza técnica.',
      type: 'education'
    },
    {
      date: 'Udemy · 40h',
      title: 'Curso Fullstack con JavaScript',
      subtitle: 'Udemy',
      text: 'Formación práctica en HTML, CSS, JavaScript y Node.js para reforzar fundamentos y entender mejor el flujo completo de una aplicación web.',
      type: 'education',
      isUdemy: true
    },
    {
      date: 'Udemy · 15h',
      title: 'Java: Explorar el lenguaje desde cero',
      subtitle: 'Udemy',
      text: 'Curso orientado a consolidar la base del lenguaje, la sintaxis y la lógica de programación con Java, útil para afianzar el trabajo posterior con Spring Boot.',
      type: 'education',
      isUdemy: true
    },
    {
      date: 'Udemy · 16h',
      title: 'Building FullStack E-Commerce App using Spring Boot & Angular',
      subtitle: 'Udemy',
      text: 'Curso enfocado en el desarrollo de una aplicación full stack con Angular y Spring Boot, reforzando integración frontend-backend, estructura y lógica de proyecto.',
      type: 'education',
      isUdemy: true
    }
  ];
}
