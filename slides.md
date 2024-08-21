---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Web tooling Course
info: |
 ## Web tooling course @Univ Rennes
  Master @istic

  Learn more at [istic](https://istic.univ-rennes.fr/)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---

# Tools for JavaScript/TypeScript Development

 Unleash the Power of JavaScript/TypeScript Tooling

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/barais/web.tooling" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---


# Table of Contents

- JavaScript Editors
  - JetBrains WebStorm
  - Sublime Text 2/3
  - Atom
  - Visual Code Editor

- Project tools
  - Package Management: NPM/Yarn & Bower
  - Scaffolding: Yeoman
  - Task Automation: Grunt && Gulp && npm


---
layout: center
---

# JavaScript Editors

---

#   JetBrains WebStorm

- JavaScript IDE suitable for both client-side JavaScript and server (Node.js) development
  - Livereload
  - Build
  - Code highlighting/Intellisense for:
    - LESS/SASS/Stylus CSS preprocessors
    - CoffeeScript/TypeScript JavaScript preprocessors
    - AngularJS directives
    - Emmet Coding
  - Has only 30-days-long free trial

---

# Sublime Text 2/3

- Editor for scripting languages
  - JavaScript, PHP, Python, Ruby, etc…
  - Basic code highlighting with vanilla installation
    - Endless number of configurable plugins
  - Free product
    - Paid only if used commercially
  - With plugins support for:
    - LESS/SASS/Stylus
    - CoffeeScript/TypeScript

---

# Atom: A hackable text editor


- Cross-platform editing
- Built-in package manager
- Smart autocompletion
- File system browser
- Under the hood
    - Atom is a desktop application built with HTML, JavaScript, CSS, and Node.js integration. It runs on Electron, a framework for building cross platform apps using web technologies.
- Open source
  - support by Github


---

# Visual Code Editor

- Smart autocompletion with IntelliSense.
  - smart completions based on variable types, function definitions, and imported modules.
- Debugging support
- Git commands built-in
- Extensible and customizable
- great integration of TypeScript and Angular 2
- Open source
  - support by Microsoft


---
layout: center
---

# Project Tools

No matter the Editor

---

# Project Tools

- NPM, Yarn & Bower
  - Install Node.js packages or client libraries
- Grunt & Gulp
  - Tasks runner
  - Create different tasks for build/development/test cases
- Yeoman
  - Scaffolding of applications
  - One-line-of-code to create a project template with views/routes/modules/etc…

---
layout: center
---

# Package Management

NPM, Yarn & Bower

---

# Package Management: NPM

- Node.js Package Management (NPM)
- Package manager for Node.js modules

```bash
npm init #in CMD (Win) or Terminal (MAC/Linux)
```

- Initializes an empty Node.js project with package.json file

```bash
 npm init
//enter package details
name: "NPM demos"
version: 0.0.1
description: "Demos for the NPM package management"
entry point: main.js
test command: test
git repository: http://github.com/user/repository-name
keywords: npm, package management
author: doncho.minkov@telerik.com
license: BSD-2-Clause
```

---

# Package Management: NPM

<div align="left"> - Installing modules</div>

```bash
npm install package-name [--save][--save-dev][--save-optional]
# Installs a package to the Node.js project
```

<pre> *-S*, *--save*: Package will appear in your dependencies
in package.json
   *-D*, *--save-dev*: Package will appear in
   your devDependencies
   *-O*, *--save-optional*: Package will appear in
   your optionalDependencies.
</pre>

```bash
npm install express --save-dev
```

Before running the project

```bash
npm install ## Installs all missing packages from package.json
```


---

# Package Management: Bower (Deprecated)

- Bower is a package management tool for installing client-side JavaScript libraries
  - Like jQuery, KendoUI, AngularJS, etc…
  - It is a Node.js package and should be installed first

```bash
npm install –g bower
bower init # in CMD (Win) or Terminal (Mac/Linux)
```

- Asks for pretty much the same details as *$ npm init*
- Creates bower.json file to manage libraries

---

# Package Management: Bower (Deprecated)

- Searching for libraries

```bash
bower search kendo
```

<div align="center"><img src="/image_39.png" width="30%"></div>

- Installing libraries

```bash
bower install kendo-ui
```

<div align="center"><img src="/image_40.png" width="30%"></div>


---
layout: center
---

# Grunt & Gulp & NPM

Tasks Runner

---

#  Tasks Runner

- Grunt/Gulp are Node.js task runners
  - They can run different tasks, based on configuration
  - Tasks can be:
    - Concat and minify JavaScript/CSS files
    - Compile SASS/LESS/Stylus
    - Run jshint, csshint
    - Run Unit Tests
    - Deploy to Git, Cloud, etc…
    - And many many more

---

# Task Runner
- Why use a task runner?
  - Task runners gives us automation, even for different profiles:

<Transform :scale="0.8">

| **DEVELOPMENT**	| **TEST** | **BUILD**
| --- | --- | --- |
jshint | jshint | jshint
stylus | stylus | stylus
csshint | csshint | csshint
connect | mocha | concat
watch | | uglify
| | copy
| | usemin
</Transform>

---
layout: center
---

# Yeoman
Application Scaffolding

---

# Yeoman
- Yeoman is a Node.js package for application scaffolding
  - Uses bower & NPM to install the js package
  - Has lots of generators for many types of applications:
    - MEAN, AngularJS, Kendo-UI, WebApp, WordPress, Backbone, Express, etc…
    - Each generators install both needed Node.js packages and client-side JavaScript libraries
    - Generated Gruntfile.js for build/test/serve

---

# Yeoman
<pre>Install Yeoman:</pre>
```bash
npm install –g yo
```

<pre>Install Yeoman generator:</pre>

```bash
npm install –g generator-jhipster
```

<pre>Scaffold Express application:</pre>

```bash
cd path/to/app/directory
yo jhipster
```

<pre>Generates:</pre>

<div align="center"><img src="/image_41.jpg" width="20%"></div>
