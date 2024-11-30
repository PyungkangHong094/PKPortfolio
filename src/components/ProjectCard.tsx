import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  type: 'web' | 'app';
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export function ProjectCard({ type, title, description, imageUrl, projectUrl }: ProjectCardProps) {
  return (
    <div className={`group ${
      type === 'web' ? 'w-full max-w-2xl' : 'w-full max-w-xs'
    }`}>
      <div className="relative transition-transform duration-300 ease-in-out transform group-hover:scale-[1.02]">
        {/* Device Frame */}
        <div className={`relative ${
          type === 'web'
            ? 'aspect-[16/10] bg-[#1d1d1f] rounded-xl p-4 pt-6 shadow-xl'
            : 'aspect-[9/19.5] bg-[#1d1d1f] rounded-[3rem] p-3 shadow-xl'
        }`}>
          {/* Camera/Notch Elements */}
          {type === 'web' && (
            <div className="absolute top-2 left-0 right-0 flex justify-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#fc605c]" />
              <div className="w-2 h-2 rounded-full bg-[#fdbc40]" />
              <div className="w-2 h-2 rounded-full bg-[#34c749]" />
            </div>
          )}
          
          {type === 'app' && (
            <>
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#1d1d1f] rounded-full" />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full" />
            </>
          )}
          
          {/* Project Screenshot */}
          <div className={`relative w-full h-full overflow-hidden ${
            type === 'web' ? 'rounded-lg' : 'rounded-[2rem]'
          }`}>
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Link
                to={projectUrl}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-medium transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300"
              >
                View Details
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="mt-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}