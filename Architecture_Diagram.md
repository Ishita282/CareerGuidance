  # System Architecture - Career Guidance Web App

## Components

1. **Frontend**
   - HTML / CSS / JS
   - Pages: 11 modules
   - Navigation via buttons and localStorage

2. **Backend**
   - Firebase Auth (Student / Admin)
   - Firebase Firestore (Colleges, Registrations)

3. **Data Flow**
   - User login/signup → Firebase Auth → store session
   - Career & location selection → localStorage
   - College selection → Firestore query → registration
   - Aptitude test → store score in localStorage → display

4. **Logging**
   - Every action logged using console.log()

5. **Deployment**
   - Can run on Firebase Hosting or any static server
