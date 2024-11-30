import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 dark:text-white">Project not found</h1>
          <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {project.description}
          </p>
        </div>

        {/* Screenshots */}
        <div className="mb-16">
          <div className="flex overflow-x-auto gap-6 pb-4 -mx-4 px-4">
            {project.screenshots.map((screenshot, index) => (
              <img
                key={index}
                src={screenshot}
                alt={`${project.title} screenshot ${index + 1}`}
                className={`object-cover rounded-lg shadow-lg flex-none ${
                  project.type === 'web'
                    ? 'w-[800px] h-[450px]'
                    : 'w-[270px] h-[584px]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Links */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 dark:text-white">Links</h2>
            <ul className="space-y-3">
              {Object.entries(project.links).map(([key, value]) => (
                <li key={key}>
                  <a
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    {key === 'github' ? (
                      <Github className="w-4 h-4 mr-2" />
                    ) : (
                      <ExternalLink className="w-4 h-4 mr-2" />
                    )}
                    {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 dark:text-white">Project Details</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-medium text-gray-900 dark:text-white mb-2">Period</dt>
                <dd className="text-gray-600 dark:text-gray-300">{project.details.period}</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900 dark:text-white mb-2">Team</dt>
                <dd className="text-gray-600 dark:text-gray-300">{project.details.team}</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900 dark:text-white mb-2">Tech Stack</dt>
                <dd className="flex flex-wrap gap-2">
                  {project.details.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900 dark:text-white mb-2">Key Features</dt>
                <dd>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    {project.details.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}