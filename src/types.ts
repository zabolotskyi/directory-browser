export interface Folder {
  id: string,
  name: string
  isOpen: boolean
  children?: Array<Folder>
}