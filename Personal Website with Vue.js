<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue.js Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            scroll-behavior: smooth;
        }
    </style>
</head>
<body class="bg-gray-100 text-gray-800">

    <div id="app" class="antialiased">
        
        <!-- Header -->
        <app-header :nav-links="navLinks"></app-header>

        <!-- Hero Section -->
        <hero-section></hero-section>

        <!-- Main Content -->
        <main class="container mx-auto px-6 py-12">
            <!-- About Section -->
            <about-section id="about"></about-section>

            <!-- Skills Section -->
            <skills-section id="skills" :skills="skills"></skills-section>

            <!-- Projects Section -->
            <projects-section id="projects" :projects="projects"></projects-section>

            <!-- Contact Section -->
            <contact-section id="contact"></contact-section>
        </main>

        <!-- Footer -->
        <app-footer></app-footer>

    </div>

    <script>
        const { createApp, ref } = Vue;

        const app = createApp({
            setup() {
                const navLinks = ref([
                    { text: 'About', href: '#about' },
                    { text: 'Skills', href: '#skills' },
                    { text: 'Projects', href: '#projects' },
                    { text: 'Contact', href: '#contact' },
                ]);

                const skills = ref([
                    { name: 'Vue.js', level: '90%' },
                    { name: 'JavaScript (ES6+)', level: '95%' },
                    { name: 'HTML5 & CSS3', level: '95%' },
                    { name: 'Tailwind CSS', level: '85%' },
                    { name: 'Node.js', level: '75%' },
                    { name: 'Firebase', level: '70%' },
                    { name: 'Git & GitHub', level: '80%' },
                ]);

                const projects = ref([
                    {
                        title: 'Project One',
                        description: 'A brief description of the first project. It highlights the key technologies used and the problems solved. Built with Vue.js and Tailwind CSS.',
                        image: 'https://placehold.co/600x400/313438/ffffff?text=Project+One',
                        link: '#',
                        tags: ['Vue.js', 'Tailwind CSS', 'Firebase']
                    },
                    {
                        title: 'Project Two',
                        description: 'This project showcases advanced state management with Vuex and integration with a REST API. A fully responsive and interactive web application.',
                        image: 'https://placehold.co/600x400/313438/ffffff?text=Project+Two',
                        link: '#',
                        tags: ['Vue.js', 'Vuex', 'API']
                    },
                    {
                        title: 'Project Three',
                        description: 'A personal blog platform built using Nuxt.js for server-side rendering, improving SEO and initial load times. Features markdown support for posts.',
                        image: 'https://placehold.co/600x400/313438/ffffff?text=Project+Three',
                        link: '#',
                        tags: ['Nuxt.js', 'SSR', 'Markdown']
                    },
                ]);

                return {
                    navLinks,
                    skills,
                    projects
                };
            }
        });

        // -- Components --

        // Header Component
        app.component('app-header', {
            props: ['navLinks'],
            template: `
                <header class="bg-white shadow-md sticky top-0 z-50">
                    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
                        <div class="text-2xl font-bold text-gray-800">
                            <a href="#">Your Name</a>
                        </div>
                        <div class="hidden md:flex space-x-6">
                            <a v-for="link in navLinks" :key="link.text" :href="link.href" class="text-gray-600 hover:text-gray-800 transition duration-300">{{ link.text }}</a>
                        </div>
                        <div class="md:hidden">
                            <!-- Mobile Menu Button -->
                            <button @click="isOpen = !isOpen" class="text-gray-600 hover:text-gray-800 focus:outline-none">
                                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                        </div>
                    </nav>
                     <!-- Mobile Menu -->
                    <div v-if="isOpen" class="md:hidden">
                        <a v-for="link in navLinks" :key="link.text" :href="link.href" @click="isOpen = false" class="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-200">{{ link.text }}</a>
                    </div>
                </header>
            `,
            setup() {
                const isOpen = ref(false);
                return { isOpen };
            }
        });

        // Hero Section Component
        app.component('hero-section', {
            template: `
                <section class="bg-gray-800 text-white py-20 md:py-32">
                    <div class="container mx-auto text-center px-6">
                        <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-4">Creative Vue.js Developer</h1>
                        <p class="text-lg md:text-xl text-gray-300 mb-8">I build modern, responsive, and scalable web applications.</p>
                        <a href="#contact" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">Get In Touch</a>
                    </div>
                </section>
            `
        });
        
        // About Section Component
        app.component('about-section', {
            template: `
                <section class="py-16">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold">About Me</h2>
                        <p class="text-gray-600 mt-2">A little bit about my journey and passion.</p>
                    </div>
                    <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
                        <div class="md:w-1/3 mb-8 md:mb-0">
                            <img src="https://placehold.co/300x300/e2e8f0/313438?text=Me" alt="Your Name" class="rounded-full shadow-lg mx-auto">
                        </div>
                        <div class="md:w-2/3 md:pl-12 text-center md:text-left">
                            <p class="text-lg text-gray-700 leading-relaxed">
                                Hello! I'm a passionate and detail-oriented developer with a strong foundation in front-end technologies, specializing in Vue.js. I love turning complex problems into simple, beautiful, and intuitive designs. 
                            </p>
                            <p class="mt-4 text-lg text-gray-700 leading-relaxed">
                                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee. I'm always eager to learn and grow, both personally and professionally.
                            </p>
                        </div>
                    </div>
                </section>
            `
        });

        // Skills Section Component
        app.component('skills-section', {
            props: ['skills'],
            template: `
                <section class="py-16 bg-white rounded-lg shadow-lg">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold">My Skills</h2>
                        <p class="text-gray-600 mt-2">The technologies I work with.</p>
                    </div>
                    <div class="max-w-4xl mx-auto px-6">
                        <div v-for="skill in skills" :key="skill.name" class="mb-6">
                            <div class="flex justify-between items-center mb-1">
                                <span class="text-lg font-medium text-gray-700">{{ skill.name }}</span>
                                <span class="text-sm font-medium text-gray-500">{{ skill.level }}</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-blue-500 h-2.5 rounded-full" :style="{ width: skill.level }"></div>
                            </div>
                        </div>
                    </div>
                </section>
            `
        });

        // Projects Section Component
        app.component('projects-section', {
            props: ['projects'],
            template: `
                <section class="py-16">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold">My Projects</h2>
                        <p class="text-gray-600 mt-2">A selection of my work.</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div v-for="project in projects" :key="project.title" class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
                            <img :src="project.image" :alt="project.title" class="w-full h-56 object-cover">
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
                                <p class="text-gray-700 mb-4">{{ project.description }}</p>
                                <div class="mb-4">
                                    <span v-for="tag in project.tags" :key="tag" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ tag }}</span>
                                </div>
                                <a :href="project.link" target="_blank" class="text-blue-500 hover:text-blue-700 font-semibold">View Project &rarr;</a>
                            </div>
                        </div>
                    </div>
                </section>
            `
        });

        // Contact Section Component
        app.component('contact-section', {
            template: `
                <section class="py-16 bg-white rounded-lg shadow-lg">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold">Contact Me</h2>
                        <p class="text-gray-600 mt-2">I'm available for freelance work and open to new opportunities.</p>
                    </div>
                    <div class="max-w-2xl mx-auto px-6">
                        <form @submit.prevent="submitForm" class="space-y-6">
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" v-model="form.name" required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" v-model="form.email" required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            </div>
                            <div>
                                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" v-model="form.message" rows="4" required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">Send Message</button>
                            </div>
                        </form>
                        <div v-if="submitted" class="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md text-center">
                            Thank you for your message! I'll get back to you soon.
                        </div>
                    </div>
                </section>
            `,
            setup() {
                const form = ref({
                    name: '',
                    email: '',
                    message: ''
                });
                const submitted = ref(false);

                const submitForm = () => {
                    // In a real application, you would handle form submission here (e.g., send to an API)
                    console.log('Form submitted:', form.value);
                    submitted.value = true;
                    // Reset form after a few seconds
                    setTimeout(() => {
                        submitted.value = false;
                        form.value.name = '';
                        form.value.email = '';
                        form.value.message = '';
                    }, 5000);
                };

                return {
                    form,
                    submitted,
                    submitForm
                };
            }
        });

        // Footer Component
        app.component('app-footer', {
            template: `
                <footer class="bg-gray-800 text-white py-8 mt-16">
                    <div class="container mx-auto text-center">
                        <div class="flex justify-center space-x-6 mb-4">
                            <a href="#" class="hover:text-gray-400 transition duration-300">GitHub</a>
                            <a href="#" class="hover:text-gray-400 transition duration-300">LinkedIn</a>
                            <a href="#" class="hover:text-gray-400 transition duration-300">Twitter</a>
                        </div>
                        <p>&copy; ${new Date().getFullYear()} Your Name. All rights reserved.</p>
                    </div>
                </footer>
            `
        });

        app.mount('#app');
    </script>

</body>
</html>
