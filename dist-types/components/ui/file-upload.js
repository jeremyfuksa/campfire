import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { cn } from './utils';
import { Button } from './button';
export function FileUpload({ accept, multiple = false, maxSize = 10, onFilesSelected, onFileSelect, label = "Click to upload", className, }) {
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const inputRef = useRef(null);
    const handleFiles = (files) => {
        if (!files)
            return;
        const fileArray = Array.from(files);
        const validFiles = fileArray.filter(file => {
            const sizeMB = file.size / (1024 * 1024);
            return sizeMB <= maxSize;
        });
        setSelectedFiles(validFiles);
        onFilesSelected?.(validFiles);
        onFileSelect?.(validFiles);
    };
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };
    const handleDragLeave = () => {
        setIsDragging(false);
    };
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        handleFiles(e.dataTransfer.files);
    };
    const handleClick = () => {
        inputRef.current?.click();
    };
    const handleChange = (e) => {
        handleFiles(e.target.files);
    };
    const removeFile = (index) => {
        const newFiles = selectedFiles.filter((_, i) => i !== index);
        setSelectedFiles(newFiles);
        onFilesSelected?.(newFiles);
    };
    return (_jsxs("div", { className: cn('space-y-3', className), children: [_jsxs("div", { className: cn('relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all', isDragging && 'border-primary bg-primary/5'), style: {
                    borderColor: isDragging ? 'var(--interactive-default)' : 'var(--border-default)',
                    backgroundColor: isDragging ? 'var(--bg-subtle)' : 'transparent'
                }, onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, onClick: handleClick, children: [_jsx("input", { ref: inputRef, type: "file", accept: accept, multiple: multiple, onChange: handleChange, className: "hidden" }), _jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx("i", { className: "fa-solid fa-cloud-arrow-up", style: { fontSize: '32px', color: 'var(--text-tertiary)' } }), _jsxs("div", { children: [_jsxs("p", { style: { color: 'var(--text-primary)' }, children: [_jsx("span", { style: { color: 'var(--interactive-default)' }, children: label }), " or drag and drop"] }), _jsxs("p", { style: { fontSize: '14px', color: 'var(--text-tertiary)', marginTop: '4px' }, children: [accept ? `${accept} files` : 'Any file type', " (max ", maxSize, "MB)"] })] })] })] }), selectedFiles.length > 0 && (_jsx("div", { className: "space-y-2", children: selectedFiles.map((file, index) => (_jsxs("div", { className: "flex items-center justify-between p-3 rounded-lg border", style: {
                        backgroundColor: 'var(--bg-subtle)',
                        borderColor: 'var(--border-default)'
                    }, children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("i", { className: "fa-solid fa-file", style: { fontSize: '16px', color: 'var(--text-tertiary)' } }), _jsxs("div", { children: [_jsx("p", { style: { fontSize: '14px', color: 'var(--text-primary)' }, children: file.name }), _jsxs("p", { style: { fontSize: '12px', color: 'var(--text-tertiary)' }, children: [(file.size / 1024).toFixed(1), " KB"] })] })] }), _jsx(Button, { variant: "ghost", size: "sm", onClick: (e) => {
                                e.stopPropagation();
                                removeFile(index);
                            }, children: _jsx("i", { className: "fa-solid fa-xmark" }) })] }, index))) }))] }));
}
