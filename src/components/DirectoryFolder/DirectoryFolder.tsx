import React, { useState } from "react"

import { Folder } from "../../types"

interface Props {
  folderTree: Folder;
  renderDirectoryTree: (val: Folder) => React.ReactNode
  selectedId: string
  setSelectedId: (val: string) => void
}

const DirectryFolder = ({ folderTree, renderDirectoryTree, selectedId, setSelectedId }: Props) => {
  const [isOpen, setOpen] = useState(folderTree.isOpen)

  const isSelectedFolder = folderTree.id === selectedId

  const renderArrow = () => {
    if (folderTree.children) {
      return isOpen ? '\u25BC' : '\u25B6'
    }
  }

  const handleClick = () => {
    setOpen(!isOpen)
    setSelectedId(folderTree.id)
  }

  return (
    <>
      <div
        onClick={handleClick}
        style={{ cursor: 'pointer', color: isSelectedFolder ? '#606060' : '#808080', fontWeight: isSelectedFolder ? 'bold' : 'normal' }}
      >
        {renderArrow()}{folderTree.name}
      </div>
      {isOpen && folderTree.children && folderTree.children.map((item) => (
        <div
          key={item.id}
          style={{ marginLeft: '10px' }}
        >
          {renderDirectoryTree(item)}
        </div>
      ))}
    </>
  )
}

export default DirectryFolder