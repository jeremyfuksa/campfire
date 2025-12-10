# Deployment Fix Task Breakdown

## 1. Vite/Vitest Config
- Update `vite.config.ts` so `defineConfig` comes from `vite` and the `test` block uses the correct Vitest configuration type.
- Keep configuration simple so Vite build + Vitest linting stay aligned without cross-module type conflicts.

## 2. Unit/Smoke Tests
- `src/components/ui/__tests__/calendar.test.tsx`: supply a full `{ from, to }` range or otherwise respect the `DateRange` type.
- `src/components/ui/__tests__/checkbox.test.tsx`: widen the handler/state so it accepts `CheckedState`, preventing `indeterminate` from breaking TypeScript.
- `src/test/components-render.test.tsx`: fix OTPInput/Stepper stories so props match their component signatures; handle additional flagged props/args if `tsc` reports more.

## 3. Storybook Stories
- Convert each `.stories.tsx` to CSF3 (`Meta` + `StoryObj`) and define `args` instead of relying on bare `render`.
- Align props with component APIs:
  - Accordion, Dialog, HoverCard, Tabs, Tooltip: add required `args` and valid prop values.
  - Calendar/date pickers: use `DateRange` shapes with required `from`, avoid optional fields where not allowed, and match handler signatures.
  - DataTable: ensure `columns` uses the same generic type as the component.
  - FileUpload: drop unsupported `onUpload`, type `files` callbacks (use `onFilesSelected`/`onFileSelect`).
  - NumericInput/TimePicker: remove nonexistent props like `format`, allow handlers to accept `undefined`, and match prop names (`value`, `onChange`).
  - StatCard/StatusDot: pass plain strings or typed objects rather than React nodes when the props expect strings or union values.
  - Stepper: export the `Step` type or inline it, pass `currentStep`, and remove `children`.
  - ToggleGroup and other Radix wrappers: add `args` and ensure the handlers/signatures match `CheckedState`.

## 4. Verification
- Run `npm run test:smoke` locally to confirm Vitest still succeeds after code changes.
- Run `npm run build` to ensure `tsc` + Vite compile without TypeScript errors.

## Optional Follow-ups
- Consider a type-check-only script focusing on stories/tests (e.g., `tsc --project tsconfig.test.json`) for CI to catch regressions earlier.
