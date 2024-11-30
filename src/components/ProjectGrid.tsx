import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Project } from '../types';

interface ProjectGridProps {
  type: 'web' | 'app';
  projects: Project[];
}

export function ProjectGrid({ type, projects }: ProjectGridProps) {
  return (
    <div className={`grid ${
      type === 'web'
        ? 'grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16'
        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
    } justify-items-center max-w-7xl mx-auto px-4`}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          type={type}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          projectUrl={project.projectUrl}
        />
      ))}
    </div>
  );
}