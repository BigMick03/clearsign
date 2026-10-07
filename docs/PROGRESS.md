# Progress Log

## Phase 0
- Initialized git and pnpm workspace.
- Scaffolding `packages/core` and `packages/react`.
- Dependencies pinned and configured.
- Checked and confirmed SDK APIs.
- Pushed to github.

## Phase 1
- Created `envelope.ts`, `limits.ts`, `errors.ts`.
- Implemented robust envelope parsing, bounded XDR size, and extracted fee-bump properties.
- Wrote and passed comprehensive unit tests covering malformed base64, incorrect network passphrase, expired time bounds, and classic operations.
- Handled Muxed account parsing via `MuxedAccount` and `baseAccount`.
- Pushed Phase 1 commit to github.
