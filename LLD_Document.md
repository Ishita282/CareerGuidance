  # Low-Level Design (LLD) - Career Guidance Web App

## Modules & Functions

### 1. Student Login
- Inputs: email, password  
- Auth: Firebase Auth  
- Logs: Login success/failure  
- Navigation: career-selection.html

### 2. Sign Up
- Inputs: name, email, password  
- Auth: Firebase Auth  
- Logs: Sign up success/failure  
- Navigation: career-selection.html

### 3. College Sign Up
- Inputs: college name, location, courses, tuition  
- DB: Firestore `colleges` collection  
- Logs: College added successfully  

### 4. Career Selection
- Options: Engineering, Management  
- Stores selected career in `localStorage`  
- Logs career selection  
- Navigation: location.html

### 5. Location Selection
- Options: India, Abroad  
- Stores location in `localStorage`  
- Logs location selection  
- Navigation: college-list.html

### 6. College List
- Fetches colleges from Firestore filtered by location  
- Display: college name, courses, tuition, select button  
- Logs college selection  

### 7. College Selection
- Shows selected college info  
- Navigation: college-registration.html  

### 8. College Registration
- Inputs: name, email, CGPA  
- DB: Firestore `registrations` collection  
- Logs registration completion  
- Navigation: aptitude-test.html

### 9. Student Details
- Fetches student registration info from Firestore  
- Displays student details

### 10. Aptitude Test
- MCQs (verbal, quantitative, general knowledge)  
- Stores score in `localStorage`  
- Logs test completion  
- Navigation: test-complete.html

### 11. Test Completion
- Displays score  
- Logs score display
