# Livesplit Electron
*A simple electron wrapper for LiveSplit.org.*

This fixes building on Mac OS Catalina for [KernelZechs/livesplit-electron](https://github.com/KernelZechs/livesplit-electron), which has been abandoned. It also updates the readme to be more accessible.

Livesplit Electron is an absolutely minimal wrapper for [LiveSplit One](https://one.livesplit.org). This allows you to run livesplit on non-windows platform without the overhead of a full browser, and a more app-like experience.

_Note: I have no intention of undertaking serious work to maintain this. It's simply an interim solution until [LiveSplit One](https://github.com/LiveSplit/LiveSplitOne) completes their own electron wrapper, or native apps for each platform. That said, if you make improvements, you're more than welcome to submit a pull request and I'll review it when I have time. This could likely be greatly improved by updating electron, for example. However, rebuilding this from scratch with a newer version would likely be easier than upgrading this one, due to the simplicity of it._

### What You Need:
* NodeJS Installed (10.15 or Higher)
* Yarn and Gulp Installed Globally
* GCC/CLang/XCode/Visual Studio (Building Only)

### Development Mode:
* yarn install
* yarn start

### Build Binary:
* npm install
* gulp build

### Known Issues:
Prompts to enter text don't do anything. This breaks, for example, importing splits from [splits.io](https://splits.io), or renaming a set of splits.

My recommendation to circumnavigate this is to setup your splits as you'd like in the [web version](https://one.livesplit.org), export to a file, and import that file into this version.

### License
Copyright 2019 Anthony 'Dragoni' Mattera

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

