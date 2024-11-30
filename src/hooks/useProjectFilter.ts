import { useState, useMemo } from 'react';
import { Project } from '../types';

export function useProjectFilter(projects: Project[]) {
  const [activeType, setActiveType] = useState<'web' | 'app'>('web');

  const filteredProjects = useMemo(() => {
    return projects.filter(project => project.type === activeType);
  }, [projects, activeType]);

  return {
    filteredProjects,
    activeType,
    setActiveType,
  };
}