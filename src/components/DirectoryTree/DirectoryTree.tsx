import React, { useEffect, useState } from "react"

import DirectoryFolder from "../DirectoryFolder"
import { MOCKY_FOLDER_TREE } from "../../consts"
import { Folder } from "../../types"

const DirectoryTree = () => {
  const [folderTree, setFolderTree] = useState()
  const [errorFolderTree, setErrorFolderTree] = useState()
  const [selectedId, setSelectedId] = useState('1')

  useEffect(() => {
    fetch(MOCKY_FOLDER_TREE)
      .then(response => response.json())
      .then(data => {
        setFolderTree(data)
      })
      .catch((error) => {
        setErrorFolderTree(error)
      })
  }, [])

  const getBreadcrumbsPath = (folder: Folder, id: string): Array<string> | null => {
    if (folder.id === id) {
      return []
    } else if (folder.children) {
      for (var i = 0; i < folder.children.length; i++) {
        var path = getBreadcrumbsPath(folder.children[i], id)
        if (path !== null) {
          path.unshift(folder.children[i].name)
          return path
        }
      }
    }
    return null
  }

  const renderBreadcrumbs = (folderTree: Folder) =>
    <div>
      Documents{getBreadcrumbsPath(folderTree, selectedId)?.map((item) => ` > ${item}`)}
    </div>

  const renderDirectoryTree = (folderTree: Folder): React.ReactNode =>
    <DirectoryFolder
      folderTree={folderTree}
      renderDirectoryTree={renderDirectoryTree}
      selectedId={selectedId}
      setSelectedId={setSelectedId}
    />

  return (
    <div>
      {folderTree ? (
        <div style={{ margin: '20px' }}>
          <div style={{ color: '#606060', fontWeight: 'bold' }}>{renderBreadcrumbs(folderTree)}</div>
          <div style={{ marginTop: '20px' }}>{renderDirectoryTree(folderTree)}</div>
        </div>
      ) : (
        errorFolderTree ? <div>{errorFolderTree}</div> : <div>Fetching dolder tree...</div>
      )}
    </div>
  )
}

export default DirectoryTree
