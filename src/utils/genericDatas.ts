import { app } from "../types/types"

export const applications: app[] = [
  {
    name: 'archive',
    icon: '/images/brainIcon.svg',
    preview: '/public/images/archivePreview.svg',
    description: 'Archive your knowledge, create topics, fill it with chapters, texts, images and more !',
  },
  {
    name: 'calendar',
    icon: '/images/calendarIcon.svg',
    preview: '/public/images/calendarPreview.svg',
    description: 'Schedule your time and keep track of upcoming events at a glance.',
  },
  {
    name: 'to-do',
    icon: '/images/todolistIcon.svg',
    preview: '',
    description: 'Manage your daily tasks by creating, updating, and checking off tasks as you complete them.',
  },
  {
    name: 'vault',
    icon: '/images/vaultIcon.svg',
    preview: '/public/images/vaultPreview.svg',
    description: 'Store, access, and organize your files all in one secure place.',
  },
  {
    name: 'progress',
    icon: '/images/barbellIcon.svg',
    description: 'Set personal goals and easily track your progress with detailed updates.',
    preview: '',
  },
]