import React from 'react';
import { ProjectGrid } from './ProjectGrid';
import { ProjectToggle } from './ProjectToggle';
import { useProjectFilter } from '../hooks/useProjectFilter';
import { Project } from '../types';

interface ProjectSectionProps {
  projects: Project[];
}

export function ProjectSection({ projects }: ProjectSectionProps) {
  const { filteredProjects, activeType, setActiveType } = useProjectFilter(projects);

  return (
    <div className="py-16">
      <ProjectToggle activeType={activeType} onToggle={setActiveType} />
      <div className="relative">
        <div
          className={`transition-all duration-500 ${
            activeType === 'web' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute inset-0'
          }`}
        >
          {activeType === 'web' && (
            <ProjectGrid
              type="web"
              projects={filteredProjects}
            />
          )}
        </div>
        <div
          className={`transition-all duration-500 ${
            activeType === 'app' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full absolute inset-0'
          }`}
        >
          {activeType === 'app' && (
            <ProjectGrid
              type="app"
              projects={filteredProjects}
            />
          )}
        </div>
      </div>
    </div>
  );
}