import { app } from "../types/types"

export const applications: app[] = [
  {
    name: 'archive',
    icon: '/images/brainIcon.svg',
    preview: '/public/images/archivePreview.svg',
  },
  {
    name: 'calendar',
    icon: '/images/calendarIcon.svg',
    preview: '/public/images/calendarPreview.svg',
  },
  {
    name: 'to-do',
    icon: '/images/todolistIcon.svg',
    preview: '',
  },
  {
    name: 'vault',
    icon: '/images/vaultIcon.svg',
    preview: '/public/images/vaultPreview.svg',
  },
  {
    name: 'progress',
    icon: '/images/barbellIcon.svg',
    preview: '',
  },
]