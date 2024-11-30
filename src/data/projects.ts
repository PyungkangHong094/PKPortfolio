export const projects = [
  {
    id: '1',
    type: 'web',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with real-time inventory and AI-powered recommendations',
    imageUrl: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1280',
    projectUrl: '/project/1',
    screenshots: [
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1280',
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1280',
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1280'
    ],
    details: {
      period: 'Jan 2023 - Mar 2023',
      team: 'Solo Project',
      stack: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
      features: [
        'Real-time inventory tracking',
        'AI-powered product recommendations',
        'Secure payment processing',
        'Admin dashboard'
      ]
    },
    links: {
      live: 'https://example.com',
      github: 'https://github.com',
      blog: 'https://blog.example.com'
    }
  },
  {
    id: '2',
    type: 'web',
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization platform with customizable widgets and reporting',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1280',
    projectUrl: '/project/2',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1280',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1280',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1280'
    ],
    details: {
      period: 'Apr 2023 - Jun 2023',
      team: 'Team of 3',
      stack: ['Vue.js', 'D3.js', 'Firebase', 'TailwindCSS'],
      features: [
        'Real-time data updates',
        'Customizable widgets',
        'Export reports',
        'Team collaboration'
      ]
    },
    links: {
      live: 'https://example.com',
      github: 'https://github.com'
    }
  },
  {
    id: '3',
    type: 'app',
    title: 'Fitness Tracker',
    description: 'AI-powered workout tracking and nutrition planning app',
    imageUrl: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=1280',
    projectUrl: '/project/3',
    screenshots: [
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=1280',
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=1280',
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=1280'
    ],
    details: {
      period: 'Jul 2023 - Sep 2023',
      team: 'Team of 2',
      stack: ['React Native', 'TensorFlow.js', 'Node.js'],
      features: [
        'Workout tracking',
        'Nutrition planning',
        'Progress analytics',
        'Social sharing'
      ]
    },
    links: {
      appStore: 'https://apps.apple.com',
      playStore: 'https://play.google.com',
      github: 'https://github.com'
    }
  }
] as const;