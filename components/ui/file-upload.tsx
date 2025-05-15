'use client'

import { useState, useRef, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, X, File as FileIcon, AlertCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FileUploadProps {
  onChange: (files: File[]) => void
  maxFiles?: number
  maxSize?: number // en Mo
  acceptedTypes?: string[]
  className?: string
}

export function FileUpload({
  onChange,
  maxFiles = 3,
  maxSize = 10,
  acceptedTypes = ['.pdf', '.doc', '.docx', '.txt', '.jpg', '.jpeg', '.png'],
  className = ''
}: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([])
  const [error, setError] = useState<string>('')
  const timeoutRef = useRef<NodeJS.Timeout>()

  // Convertit les extensions en types MIME
  const getMimeTypes = (extensions: string[]) => {
    const mimeMap: { [key: string]: string } = {
      '.pdf': 'application/pdf',
      '.doc': 'application/msword',
      '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      '.txt': 'text/plain',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png'
    }
    return extensions.map(ext => mimeMap[ext] || ext)
  }

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    // Réinitialiser l'erreur
    setError('')
    
    // Vérifier si le nombre maximum de fichiers serait dépassé
    if (files.length + acceptedFiles.length > maxFiles) {
      setError(`Vous ne pouvez pas télécharger plus de ${maxFiles} fichiers`)
      return
    }

    // Vérifier la taille des fichiers
    const oversizedFiles = acceptedFiles.filter(
      file => file.size > maxSize * 1024 * 1024
    )
    if (oversizedFiles.length > 0) {
      setError(`Les fichiers ne doivent pas dépasser ${maxSize}Mo`)
      return
    }

    // Mettre à jour la liste des fichiers
    const newFiles = [...files, ...acceptedFiles]
    setFiles(newFiles)
    onChange(newFiles)

    // Afficher les erreurs de rejet s'il y en a
    if (rejectedFiles.length > 0) {
      setError('Certains fichiers ont été rejetés. Vérifiez le format et la taille.')
      
      // Effacer l'erreur après 3 secondes
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setError(''), 3000)
    }
  }, [files, maxFiles, maxSize, onChange])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: getMimeTypes(acceptedTypes).reduce((acc, type) => ({
      ...acc,
      [type]: []
    }), {}),
    maxSize: maxSize * 1024 * 1024,
    multiple: true
  })

  const removeFile = (indexToRemove: number) => {
    const newFiles = files.filter((_, index) => index !== indexToRemove)
    setFiles(newFiles)
    onChange(newFiles)
  }

  // Formatter la taille du fichier
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`
  }

  // Obtenir l'extension du fichier
  const getFileExtension = (filename: string) => {
    return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2)
  }

  return (
    <div className={className}>
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-lg p-4 text-center cursor-pointer
          transition-colors duration-200 ease-in-out
          ${isDragActive 
            ? 'border-[#8B0000] bg-red-50' 
            : 'border-gray-300 hover:border-[#8B0000] hover:bg-gray-50'
          }
        `}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-2">
          <Upload className={`w-8 h-8 ${isDragActive ? 'text-[#8B0000]' : 'text-gray-400'}`} />
          <div className="text-sm">
            <span className="font-medium text-[#8B0000]">Cliquez pour sélectionner</span>
            {' '}ou glissez-déposez vos fichiers ici
          </div>
          <p className="text-xs text-gray-500">
            {acceptedTypes.join(', ')} • Max {maxSize}Mo par fichier
          </p>
        </div>
      </div>

      {/* Message d'erreur */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 mt-2 text-sm text-red-600"
          >
            <AlertCircle className="w-4 h-4" />
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Liste des fichiers */}
      <div className="mt-3 space-y-2">
        <AnimatePresence>
          {files.map((file, index) => (
            <motion.div
              key={`${file.name}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg text-sm"
            >
              <FileIcon className="w-4 h-4 text-gray-400" />
              <div className="flex-1 min-w-0">
                <p className="truncate font-medium">{file.name}</p>
                <p className="text-xs text-gray-500">
                  {formatFileSize(file.size)} • {getFileExtension(file.name).toUpperCase()}
                </p>
              </div>
              <button
                onClick={() => removeFile(index)}
                className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                title="Supprimer"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Compteur de fichiers */}
      {files.length > 0 && (
        <p className="text-xs text-gray-500 mt-2">
          {files.length} sur {maxFiles} fichiers
        </p>
      )}
    </div>
  )
} 