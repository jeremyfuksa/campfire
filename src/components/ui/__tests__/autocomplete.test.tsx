import { describe, it, expect, vi, beforeAll } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import * as React from 'react';
import { Autocomplete, AutocompleteOption } from '../autocomplete';

expect.extend(toHaveNoViolations);

// Mock scrollIntoView for cmdk compatibility with jsdom
beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn();
});

const options: AutocompleteOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape' },
];

describe('Autocomplete', () => {
  it('renders with placeholder', () => {
    render(<Autocomplete options={options} placeholder="Choose a fruit" />);
    expect(screen.getByText('Choose a fruit')).toBeInTheDocument();
  });

  it('opens dropdown when clicked', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} searchPlaceholder="Search fruits" />);

    const trigger = screen.getByText('Select...');
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByPlaceholderText('Search fruits')).toBeInTheDocument();
    });
  });

  it('displays all options when opened', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} />);

    await user.click(screen.getByText('Select...'));

    await waitFor(() => {
      expect(screen.getByText('Apple')).toBeInTheDocument();
      expect(screen.getByText('Banana')).toBeInTheDocument();
      expect(screen.getByText('Cherry')).toBeInTheDocument();
    });
  });

  it('filters options based on search', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} />);

    await user.click(screen.getByText('Select...'));

    const searchInput = await screen.findByPlaceholderText('Search...');
    await user.type(searchInput, 'app');

    await waitFor(() => {
      expect(screen.getByText('Apple')).toBeInTheDocument();
      expect(screen.queryByText('Banana')).not.toBeInTheDocument();
    });
  });

  it('supports fuzzy search', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} />);

    await user.click(screen.getByText('Select...'));

    const searchInput = await screen.findByPlaceholderText('Search...');
    await user.type(searchInput, 'ape'); // Should match "Grape" fuzzy

    await waitFor(() => {
      expect(screen.getByText('Apple')).toBeInTheDocument();
      expect(screen.getByText('Grape')).toBeInTheDocument();
    });
  });

  it('selects single value', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<Autocomplete options={options} onValueChange={onValueChange} />);

    await user.click(screen.getByText('Select...'));

    const appleOption = await screen.findByText('Apple');
    await user.click(appleOption);

    expect(onValueChange).toHaveBeenCalledWith('apple');
  });

  it('displays selected value', () => {
    render(<Autocomplete options={options} value="banana" />);
    expect(screen.getByText('Banana')).toBeInTheDocument();
  });

  it('supports multiple selection', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();

    const TestComponent = () => {
      const [value, setValue] = React.useState<string[]>([]);
      return (
        <Autocomplete
          options={options}
          multiple
          value={value}
          onValueChange={(newValue) => {
            setValue(newValue as string[]);
            onValueChange(newValue);
          }}
        />
      );
    };

    render(<TestComponent />);

    await user.click(screen.getByText('Select...'));

    const appleOption = await screen.findByText('Apple');
    await user.click(appleOption);

    expect(onValueChange).toHaveBeenCalledWith(['apple']);

    const bananaOption = await screen.findByText('Banana');
    await user.click(bananaOption);

    expect(onValueChange).toHaveBeenCalledWith(['apple', 'banana']);
  });

  it('displays multiple selected values as badges', () => {
    render(
      <Autocomplete
        options={options}
        multiple
        value={['apple', 'banana']}
      />
    );

    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
  });

  it('removes selected item in multiple mode', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <Autocomplete
        options={options}
        multiple
        value={['apple', 'banana']}
        onValueChange={onValueChange}
      />
    );

    const removeButton = screen.getByRole('button', { name: 'Remove Apple' });
    await user.click(removeButton);

    expect(onValueChange).toHaveBeenCalledWith(['banana']);
  });

  it('respects maxSelected limit', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();

    const TestComponent = () => {
      const [value, setValue] = React.useState<string[]>(['apple', 'banana']);
      return (
        <Autocomplete
          options={options}
          multiple
          maxSelected={2}
          value={value}
          onValueChange={(newValue) => {
            setValue(newValue as string[]);
            onValueChange(newValue);
          }}
        />
      );
    };

    render(<TestComponent />);

    // Click on the component to open it (badges are shown, not "2 selected" text)
    const appleBadge = screen.getByText('Apple');
    await user.click(appleBadge.closest('div')!.parentElement!);

    const cherryOption = await screen.findByText('Cherry');
    await user.click(cherryOption);

    // Should not add third item because maxSelected is 2
    expect(onValueChange).not.toHaveBeenCalledWith(['apple', 'banana', 'cherry']);
    // Should still be called with the current 2 items
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('closes dropdown after single selection', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} />);

    await user.click(screen.getByText('Select...'));

    const appleOption = await screen.findByText('Apple');
    await user.click(appleOption);

    await waitFor(() => {
      expect(screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument();
    });
  });

  it('keeps dropdown open in multiple mode', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} multiple />);

    await user.click(screen.getByText('Select...'));

    const appleOption = await screen.findByText('Apple');
    await user.click(appleOption);

    // Should still be open
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('shows empty state when no results', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} emptyText="Nothing found" />);

    await user.click(screen.getByText('Select...'));

    const searchInput = await screen.findByPlaceholderText('Search...');
    await user.type(searchInput, 'zzz');

    await waitFor(() => {
      expect(screen.getByText('Nothing found')).toBeInTheDocument();
    });
  });

  it('supports async search', async () => {
    const user = userEvent.setup();
    const onSearch = vi.fn();
    render(
      <Autocomplete
        options={options}
        async
        onSearch={onSearch}
      />
    );

    await user.click(screen.getByText('Select...'));

    const searchInput = await screen.findByPlaceholderText('Search...');
    await user.type(searchInput, 'test');

    // Wait for debounce
    await waitFor(() => {
      expect(onSearch).toHaveBeenCalledWith('test');
    }, { timeout: 500 });
  });

  it('shows loading state', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={[]} loading />);

    await user.click(screen.getByText('Select...'));

    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });

  it('supports creatable option', async () => {
    const user = userEvent.setup();
    const onCreate = vi.fn();
    render(
      <Autocomplete
        options={options}
        creatable
        onCreate={onCreate}
      />
    );

    await user.click(screen.getByText('Select...'));

    const searchInput = await screen.findByPlaceholderText('Search...');
    await user.type(searchInput, 'Mango');

    const createOption = await screen.findByText(/Create "Mango"/);
    await user.click(createOption);

    expect(onCreate).toHaveBeenCalledWith('Mango');
  });

  it('disables when disabled prop is true', () => {
    render(<Autocomplete options={options} disabled />);

    const trigger = screen.getByText('Select...');
    fireEvent.click(trigger);

    // Should not open
    expect(screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument();
  });

  it('handles disabled options', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    const disabledOptions: AutocompleteOption[] = [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana', disabled: true },
    ];

    render(
      <Autocomplete
        options={disabledOptions}
        onValueChange={onValueChange}
      />
    );

    await user.click(screen.getByText('Select...'));

    const bananaOption = await screen.findByText('Banana');
    await user.click(bananaOption);

    // Should not select disabled option
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('closes on Escape key', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} />);

    await user.click(screen.getByText('Select...'));

    const searchInput = await screen.findByPlaceholderText('Search...');
    await user.type(searchInput, '{Escape}');

    await waitFor(() => {
      expect(screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument();
    });
  });

  it('applies custom className', () => {
    const { container } = render(
      <Autocomplete options={options} className="custom-class" />
    );

    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<Autocomplete options={options} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
