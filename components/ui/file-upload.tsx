'use client'

import { useState, useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Upload, FileText, Image as ImageIcon, AlertCircle, CheckCircle } from 'lucide-react'

// Types de fichiers acceptés avec leurs extensions et descriptions
const ACCEPTED_FILE_TYPES = {
  'application/pdf': {
    extensions: ['.pdf'],
    description: 'PDF'
  },
  'application/msword': {
    extensions: ['.doc'],
    description: 'DOC'
  },
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': {
    extensions: ['.docx'],
    description: 'DOCX'
  },
  'text/plain': {
    extensions: ['.txt'],
    description: 'TXT'
  },
  'image/jpeg': {
    extensions: ['.jpg', '.jpeg'],
    description: 'JPG'
  },
  'image/png': {
    extensions: ['.png'],
    description: 'PNG'
  }
}

// Constantes
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10Mo
const MAX_FILES = 3

interface FileUploadProps {
  onFilesChange: (files: File[]) => void
}

interface FileWithPreview extends File {
  preview?: string
}

export function FileUpload({ onFilesChange }: FileUploadProps) {
  const [files, setFiles] = useState<FileWithPreview[]>([])
  const [error, setError] = useState<string | null>(null)
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({})
  const [isDraggedOver, setIsDraggedOver] = useState(false)

  // Nettoyage des URLs de prévisualisation
  useEffect(() => {
    return () => {
      files.forEach(file => {
        if (file.preview) {
          URL.revokeObjectURL(file.preview)
        }
      })
    }
  }, [files])

  // Fonction pour vérifier le type de fichier
  const isValidFileType = (file: File) => {
    return Object.entries(ACCEPTED_FILE_TYPES).some(([mimeType, { extensions }]) => {
      return file.type === mimeType || extensions.some(ext => 
        file.name.toLowerCase().endsWith(ext)
      )
    })
  }

  // Simulation de l'upload pour la démo
  const simulateFileUpload = (file: File) => {
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 30
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
      }
      setUploadProgress(prev => ({
        ...prev,
        [file.name]: Math.min(progress, 100)
      }))
    }, 200)
  }

  // Gestionnaire de drop de fichiers
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setError(null)

    // Vérification du nombre de fichiers
    if (files.length + acceptedFiles.length > MAX_FILES) {
      setError(`Vous ne pouvez télécharger que ${MAX_FILES} fichiers maximum`)
      return
    }

    // Vérification et traitement de chaque fichier
    const processedFiles = acceptedFiles.filter(file => {
      if (file.size > MAX_FILE_SIZE) {
        setError('Chaque fichier doit faire moins de 10Mo')
        return false
      }
      if (!isValidFileType(file)) {
        setError('Format de fichier non supporté')
        return false
      }
      return true
    }).map(file => {
      // Création de prévisualisations pour les images
      if (file.type.startsWith('image/')) {
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      }
      return file
    })

    const newFiles = [...files, ...processedFiles].slice(0, MAX_FILES)
    setFiles(newFiles)
    onFilesChange(newFiles)

    // Simuler l'upload pour chaque nouveau fichier
    processedFiles.forEach(file => {
      simulateFileUpload(file)
    })
  }, [files, onFilesChange])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: MAX_FILES,
    maxSize: MAX_FILE_SIZE,
    onDragEnter: () => setIsDraggedOver(true),
    onDragLeave: () => setIsDraggedOver(false)
  })

  // Suppression d'un fichier
  const removeFile = (index: number) => {
    const fileToRemove = files[index]
    if (fileToRemove.preview) {
      URL.revokeObjectURL(fileToRemove.preview)
    }
    const newFiles = files.filter((_, i) => i !== index)
    setFiles(newFiles)
    onFilesChange(newFiles)
    setError(null)
    
    // Supprimer la progression
    setUploadProgress(prev => {
      const newProgress = { ...prev }
      delete newProgress[fileToRemove.name]
      return newProgress
    })
  }

  // Fonction pour obtenir l'icône selon le type de fichier
  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) return <ImageIcon className="w-5 h-5" />
    return <FileText className="w-5 h-5" />
  }

  // Fonction pour formater la taille du fichier
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  return (
    <div className="w-full space-y-2">
      <div
        {...getRootProps()}
        className={`
          relative border border-dashed rounded-md p-2.5 transition-all duration-200
          ${isDraggedOver || isDragActive 
            ? 'border-[#8B0000] bg-red-50' 
            : 'border-gray-300 hover:border-gray-400 bg-white'
          }
          cursor-pointer group
        `}
      >
        <input {...getInputProps()} />
        <div className="flex items-center gap-3">
          <div className={`
            p-1.5 rounded-full bg-gray-100 group-hover:bg-red-100 transition-colors duration-200
            ${isDraggedOver || isDragActive ? 'bg-red-100' : ''}
          `}>
            <Upload className={`
              w-4 h-4 transition-colors duration-200
              ${isDraggedOver || isDragActive ? 'text-[#8B0000]' : 'text-gray-400 group-hover:text-[#8B0000]'}
            `} />
          </div>
          <div>
            <p className="text-sm text-gray-800">
              {isDraggedOver || isDragActive 
                ? "Déposez vos fichiers..."
                : "Glissez vos fichiers ici ou cliquez pour sélectionner"
              }
            </p>
            <p className="text-xs text-gray-600">
              Formats acceptés : PDF, DOC, JPG • Max 3 fichiers • 10Mo
            </p>
          </div>
        </div>
      </div>

      {/* Affichage des erreurs */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 py-1 px-2 bg-red-50 text-red-700 rounded-md text-xs"
          >
            <AlertCircle className="w-3 h-3 flex-shrink-0" />
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Liste des fichiers */}
      <div className="space-y-1.5">
        <AnimatePresence>
          {files.map((file, index) => (
            <motion.div
              key={`${file.name}-${index}`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="flex items-center gap-2 py-1"
            >
              {/* Prévisualisation ou icône */}
              {file.preview ? (
                <img
                  src={file.preview}
                  alt={file.name}
                  className="w-8 h-8 rounded object-cover"
                />
              ) : (
                <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
                  {getFileIcon(file)}
                </div>
              )}
              
              {/* Informations du fichier */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm text-gray-900 truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-500 shrink-0">
                    {formatFileSize(file.size)}
                  </p>
                </div>
                
                {/* Barre de progression */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 bg-red-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ 
                        width: `${uploadProgress[file.name] || 0}%`,
                        transition: { duration: 0.2 }
                      }}
                      className="h-full bg-[#8B0000]"
                    />
                  </div>
                  <span className="text-xs text-[#8B0000] shrink-0">
                    {uploadProgress[file.name] >= 100 ? (
                      <span className="flex items-center gap-0.5">
                        <CheckCircle className="w-3 h-3" />
                        <span className="sr-only">Téléchargé</span>
                      </span>
                    ) : (
                      `${Math.round(uploadProgress[file.name] || 0)}%`
                    )}
                  </span>
                </div>
              </div>
              
              {/* Bouton de suppression */}
              <button
                onClick={() => removeFile(index)}
                className="p-1 hover:bg-red-100 rounded-full transition-colors"
              >
                <X className="w-3 h-3 text-gray-500 hover:text-[#8B0000]" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
} 