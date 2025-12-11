# RingCentral SDK Pilot (Desktop Edition)

Local-First AI Orchestration for RingCentral

RC-SDK-Pilot is an Electron-based desktop agent that acts as an intelligent
interface for the RingCentral platform.

It features a Hybrid Edge Architecture:

- The "Brain" (Local): An embedded LLM inference engine (Qwen 2.5) runs entirely
  on the user's machine to process natural language and generate logic.

- The "Hands" (Cloud): The agent executes these logical commands via the
  RingCentral SDK to interact with live API endpoints.

This design ensures that while the application requires an internet connection
to perform actions (sending SMS, checking call logs), no sensitive prompt data
or conversation history is ever sent to third-party AI providers like OpenAI or
Anthropic.

## Key features

Key Features:

- 🔒 Private Inference: Intent understanding and JSON generation happen locally.
- ⚡️ Zero 3rd-Party AI Dependencies: Runs without external AI API keys or
  subscriptions.
- 🛠 SDK-Native Grounding: Deeply integrated with the RingCentral TypeScript SDK
  for type-safe execution.

## Pre-requisites

You will need to install pnpm because this project uses pnpm instead of npm or
yarn.

## Setup

```
pnpm install
```

Download model from https://huggingface.co/Qwen/Qwen3-1.7B-GGUF/tree/main
(download the huge gguf file)

Put the downloaded model into packages/pilot/models

## Run

```
pnpm start
```
