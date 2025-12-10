import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import { Input } from './input';
import { cn } from './utils';
import { Search, X } from 'lucide-react';
export function SearchInput({ placeholder = 'Search...', suggestions = [], onSearch, className }) {
    const [value, setValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const wrapperRef = useRef(null);
    useEffect(() => {
        if (value) {
            const filtered = suggestions.filter(s => s.toLowerCase().includes(value.toLowerCase()));
            setFilteredSuggestions(filtered);
            setIsOpen(filtered.length > 0);
        }
        else {
            setIsOpen(false);
        }
    }, [value, suggestions]);
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const handleSelect = (suggestion) => {
        setValue(suggestion);
        setIsOpen(false);
        onSearch?.(suggestion);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsOpen(false);
        onSearch?.(value);
    };
    return (_jsxs("div", { ref: wrapperRef, className: cn('relative', className), children: [_jsx("form", { onSubmit: handleSubmit, children: _jsxs("div", { className: "relative", children: [_jsx(Search, { size: 14, className: "absolute left-3 top-1/2 -translate-y-1/2", style: { color: 'var(--text-tertiary)' } }), _jsx(Input, { type: "text", placeholder: placeholder, value: value, onChange: (e) => setValue(e.target.value), className: "pl-10 pr-10" }), value && (_jsx("button", { type: "button", onClick: () => setValue(''), className: "absolute right-3 top-1/2 -translate-y-1/2", children: _jsx(X, { size: 14, style: { color: 'var(--text-tertiary)' } }) }))] }) }), isOpen && filteredSuggestions.length > 0 && (_jsx("div", { className: "absolute w-full mt-1 rounded-lg border shadow-lg overflow-hidden z-50", style: {
                    backgroundColor: 'var(--bg-base)',
                    borderColor: 'var(--border-default)'
                }, children: filteredSuggestions.map((suggestion, index) => (_jsx("div", { className: "px-4 py-2 cursor-pointer transition-colors", style: {
                        color: 'var(--text-primary)'
                    }, onMouseEnter: (e) => {
                        e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
                    }, onMouseLeave: (e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                    }, onClick: () => handleSelect(suggestion), children: suggestion }, index))) }))] }));
}
