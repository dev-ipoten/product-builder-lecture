# Lotto Number Generator

## Overview

This is a simple web application that generates random lottery numbers.

## Features

*   Generates 6 unique random numbers between 1 and 45.
*   Displays the generated numbers in a visually appealing way.
*   Keeps a history of previously generated numbers.
*   Dark/light theme toggle with local storage persistence.
*   Partnership inquiry contact form (powered by Formspree).
*   GitHub Copilot and GitHub Copilot Chat integrated into the IDE environment.

## Current Plan

### Integrate GitHub Copilot

*   **`.idx/dev.nix`:**
    *   Add `GitHub.copilot` extension to enable AI-powered code completions.
    *   Add `GitHub.copilot-chat` extension to enable the Copilot chat interface.
*   **`.vscode/settings.json`:**
    *   Enable `github.copilot.enable` for all file types.
