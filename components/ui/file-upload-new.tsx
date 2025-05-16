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
    <div className="w-full space-y-4">
      <div
        {...getRootProps()}
        className={`
          relative border-2 border-dashed rounded-lg p-6 transition-all duration-200
          ${isDraggedOver || isDragActive 
            ? 'border-[#8B0000] bg-red-50' 
            : 'border-gray-300 hover:border-gray-400 bg-white'
          }
          cursor-pointer group
        `}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center gap-3">
          <div className={`
            p-3 rounded-full bg-gray-100 group-hover:bg-red-100 transition-colors duration-200
            ${isDraggedOver || isDragActive ? 'bg-red-100' : ''}
          `}>
            <Upload className={`
              w-6 h-6 transition-colors duration-200
              ${isDraggedOver || isDragActive ? 'text-[#8B0000]' : 'text-gray-400 group-hover:text-[#8B0000]'}
            `} />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              {isDraggedOver || isDragActive 
                ? "Déposez vos fichiers ici..."
                : "Glissez vos fichiers ici ou cliquez pour sélectionner"
              }
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Formats acceptés : {Object.values(ACCEPTED_FILE_TYPES)
                .map(type => type.description)
                .join(', ')}
            </p>
            <p className="text-xs text-gray-500">
              Maximum {MAX_FILES} fichiers, {MAX_FILE_SIZE / 1024 / 1024}Mo par fichier
            </p>
          </div>
        </div>
      </div>

      {/* Affichage des erreurs */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-lg border border-red-100"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm">{error}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Liste des fichiers */}
      <div className="space-y-3">
        <AnimatePresence>
          {files.map((file, index) => (
            <motion.div
              key={`${file.name}-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="relative bg-gray-50 rounded-lg p-3 pr-12"
            >
              <div className="flex items-start gap-3">
                {/* Prévisualisation ou icône */}
                {file.preview ? (
                  <img
                    src={file.preview}
                    alt={file.name}
                    className="w-12 h-12 rounded object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded">
                    {getFileIcon(file)}
                  </div>
                )}
                
                {/* Informations du fichier */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatFileSize(file.size)}
                  </p>
                  
                  {/* Barre de progression */}
                  <div className="mt-2 relative pt-1">
                    <div className="flex mb-1 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-[#8B0000]">
                          {uploadProgress[file.name] >= 100 ? (
                            <span className="flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" />
                              Téléchargé
                            </span>
                          ) : (
                            `${Math.round(uploadProgress[file.name] || 0)}%`
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-1 text-xs flex rounded bg-red-100">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ 
                          width: `${uploadProgress[file.name] || 0}%`,
                          transition: { duration: 0.2 }
                        }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#8B0000]"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Bouton de suppression */}
                <button
                  onClick={() => removeFile(index)}
                  className="absolute right-2 top-2 p-1 hover:bg-red-100 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-gray-500 hover:text-[#8B0000]" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
} 