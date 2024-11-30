export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  type: 'web' | 'app';
  screenshots: string[];
  details: {
    period: string;
    team: string;
    stack: string[];
    features: string[];
  };
  links: {
    live?: string;
    github?: string;
    appStore?: string;
    playStore?: string;
    blog?: string;
  };
}