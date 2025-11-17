import React, { useState, useRef, useEffect } from 'react';
import { Input } from './input';
import { cn } from './utils';
import { Search, X } from 'lucide-react';

interface SearchInputProps {
  placeholder?: string;
  suggestions?: string[];
  onSearch?: (value: string) => void;
  className?: string;
}

export function SearchInput({ 
  placeholder = 'Search...', 
  suggestions = [],
  onSearch,
  className 
}: SearchInputProps) {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      const filtered = suggestions.filter(s => 
        s.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setIsOpen(filtered.length > 0);
    } else {
      setIsOpen(false);
    }
  }, [value, suggestions]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (suggestion: string) => {
    setValue(suggestion);
    setIsOpen(false);
    onSearch?.(suggestion);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(false);
    onSearch?.(value);
  };

  return (
    <div ref={wrapperRef} className={cn('relative', className)}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <Search 
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2"
            style={{ color: 'var(--text-tertiary)' }}
          />
          <Input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="pl-10 pr-10"
          />
          {value && (
            <button
              type="button"
              onClick={() => setValue('')}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <X 
                size={14}
                style={{ color: 'var(--text-tertiary)' }}
              />
            </button>
          )}
        </div>
      </form>

      {isOpen && filteredSuggestions.length > 0 && (
        <div 
          className="absolute w-full mt-1 rounded-lg border shadow-lg overflow-hidden z-50"
          style={{ 
            backgroundColor: 'var(--bg-base)',
            borderColor: 'var(--border-default)'
          }}
        >
          {filteredSuggestions.map((suggestion, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer transition-colors"
              style={{
                color: 'var(--text-primary)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              onClick={() => handleSelect(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
