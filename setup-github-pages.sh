#!/bin/bash

# Ride & Swing - GitHub Pages Setup Script
echo "🏄‍♂️⛳ Setting up Ride \u0026 Swing for GitHub Pages deployment..."
echo ""

# Check if Homebrew is installed
if ! command -v brew &> /dev/null; then
    echo "📦 Homebrew not found. Installing Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    
    # Add Homebrew to PATH (for Apple Silicon Macs)
    if [[ $(uname -m) == 'arm64' ]]; then
        echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
        eval "$(/opt/homebrew/bin/brew shellenv)"
    fi
else
    echo "✅ Homebrew is already installed"
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "📦 Node.js not found. Installing Node.js..."
    brew install node
else
    echo "✅ Node.js is already installed ($(node --version))"
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not available after Node.js installation"
    exit 1
fi

echo ""
echo "📦 Installing gh-pages dependency..."
npm install --save-dev gh-pages

echo ""
echo "✨ Setup complete! Your project is ready for GitHub Pages deployment."
echo ""
echo "Next steps:"
echo "1. Push your code to GitHub"
echo "2. Enable GitHub Pages in repository settings"
echo "3. Your site will auto-deploy on every push!"
echo ""
echo "For manual deployment, run: npm run deploy"
