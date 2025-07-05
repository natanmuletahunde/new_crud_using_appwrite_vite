📝 Todo App with Appwrite & Vite

A simple and modern Todo application built with React and Vite, using Appwrite as the backend for data storage and management. Users can add, update, and delete tasks seamlessly.
🔧 Tech Stack

    ⚡ Vite – Frontend build tool for fast development

    ⚛️ React – UI framework

    📦 Appwrite – Backend-as-a-Service (BaaS) for database, authentication, and more

    💅 Tailwind CSS – For styling (optional)

    🔐 Appwrite Database & Authentication – Secure and scalable

🚀 Features

    ✅ Add new tasks

    📝 Edit or mark tasks as complete

    ❌ Delete tasks

    🔄 Real-time updates with Appwrite

    🔐 Optional: User authentication

📁 Project Structure

src/
├── components/     // UI components (Note, NoteForm)
├── appwrite/       // Appwrite config and DB logic
├── pages/          // Main app pages
├── assets/         // Icons and assets
└── main.jsx        // App entry point

🛠️ Setup Instructions

    Clone the repo
    git clone https://github.com/natanmuleta/
new_crud_using_appwrite_vite 

    Install dependencies
    npm install

    Set up Appwrite

        Create a project in your Appwrite console

        Create a Database and a Collection (e.g. notes)

        Add attributes like body (string) and completed (boolean)

        Enable permissions

        Set your .env values:

    VITE_APPWRITE_ENDPOINT=YOUR_ENDPOINT
    VITE_PROJECT_ID=YOUR_PROJECT_ID
    VITE_DATABASE_ID=YOUR_DB_ID
    VITE_COLLECTION_ID_NOTES=YOUR_COLLECTION_ID

Run the project
npm run dev
