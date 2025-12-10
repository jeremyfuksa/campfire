import React, { useRef, useState } from 'react';
import { cn } from './utils';
import { Button } from './button';

interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in MB
  onFilesSelected?: (files: File[]) => void;
  /** @deprecated Use onFilesSelected instead. */
  onFileSelect?: (files: File[]) => void;
  label?: string;
  className?: string;
}

export function FileUpload({
  accept,
  multiple = false,
  maxSize = 10,
  onFilesSelected,
  onFileSelect,
  label = "Click to upload",
  className,
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;

    const fileArray = Array.from(files);
    const validFiles = fileArray.filter(file => {
      const sizeMB = file.size / (1024 * 1024);
      return sizeMB <= maxSize;
    });

    setSelectedFiles(validFiles);
    onFilesSelected?.(validFiles);
    onFileSelect?.(validFiles);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  const removeFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    onFilesSelected?.(newFiles);
  };

  return (
    <div className={cn('space-y-3', className)}>
      <div
        className={cn(
          'relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all',
          isDragging && 'border-primary bg-primary/5'
        )}
        style={{
          borderColor: isDragging ? 'var(--interactive-default)' : 'var(--border-default)',
          backgroundColor: isDragging ? 'var(--bg-subtle)' : 'transparent'
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          className="hidden"
        />
        <div className="flex flex-col items-center gap-2">
          <i 
            className="fa-solid fa-cloud-arrow-up" 
            style={{ fontSize: '32px', color: 'var(--text-tertiary)' }}
          ></i>
          <div>
            <p style={{ color: 'var(--text-primary)' }}>
              <span style={{ color: 'var(--interactive-default)' }}>{label}</span> or drag and drop
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-tertiary)', marginTop: '4px' }}>
              {accept ? `${accept} files` : 'Any file type'} (max {maxSize}MB)
            </p>
          </div>
        </div>
      </div>

      {selectedFiles.length > 0 && (
        <div className="space-y-2">
          {selectedFiles.map((file, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 rounded-lg border"
              style={{ 
                backgroundColor: 'var(--bg-subtle)',
                borderColor: 'var(--border-default)'
              }}
            >
              <div className="flex items-center gap-3">
                <i 
                  className="fa-solid fa-file" 
                  style={{ fontSize: '16px', color: 'var(--text-tertiary)' }}
                ></i>
                <div>
                  <p style={{ fontSize: '14px', color: 'var(--text-primary)' }}>
                    {file.name}
                  </p>
                  <p style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
                    {(file.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
              >
                <i className="fa-solid fa-xmark"></i>
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
