#!/bin/bash

# Update and upgrade the system
sudo apt update -y
sudo apt upgrade -y

# Install necessary packages
sudo apt install -y nodejs npm neofetch tmux

# Install NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# Load NVM into the current shell session
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Install and use the latest LTS version of Node.js
nvm install --lts
nvm use --lts

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Nixpacks
curl -sSL https://nixpacks.com/install.sh | bash

# Clone the repository and build the Docker container
cd ~
mkdir -p projects
cd projects
git clone https://github.com/peruzzoarthur/ec2-testing.git

cd port-test
nixpacks build . --name portfolio

# Run the Docker container
docker run -d portfolio
