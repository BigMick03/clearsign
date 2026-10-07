# Soroban Clear-Sign Kit

A typed, sanitized, human-readable preview for Stellar and Soroban signing flows.

## Installation

```sh
npm install @clearsign/core @clearsign/react
```

## Usage

```tsx
import { ClearSignModal } from '@clearsign/react';

function App() {
  return (
    <ClearSignModal
      preview={null}
      onApprove={() => {}}
      onReject={() => {}}
    />
  );
}
```

## Documentation
See the `docs` folder.

## License
Apache 2.0
