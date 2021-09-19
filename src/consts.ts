// API
export const MOCKY_FOLDER_TREE = 'https://run.mocky.io/v3/f59e0fc8-6744-4060-adc1-75141a045321'

// DEFAULT DATA
export const folderTree = {
  id: '1',
  name: 'Documents',
  isOpen: true,
  children: [
    {
      id: '2',
      name: 'Folder 1',
      isOpen: true,
      children: [
        {
          id: '3',
          name: 'Subfolder 1A',
          isOpen: true,
        },
        {
          id: '4',
          name: 'Subfolder 1B',
          isOpen: true,
          children: [
            {
              id: '5',
              name: 'Subfolder 1B-1',
              isOpen: true,
            },
          ],
        },
      ],
    },
    {
      id: '6',
      name: 'Folder 2',
      isOpen: true,
      children: [
        {
          id: '7',
          name: 'Subfolder 2A',
          isOpen: true,
        },
        {
          id: '8',
          name: 'Subfolder 2B',
          isOpen: true,
        },
        {
          id: '9',
          name: 'Subfolder 2C',
          isOpen: true,
        },
      ],
    },
    {
      id: '10',
      name: 'Folder 3',
      isOpen: true,
    },
  ],
}