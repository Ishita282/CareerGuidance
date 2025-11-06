# Test Cases - Career Guidance Web App

1. **Student Login**
   - Valid email/password → should log in successfully  
   - Invalid credentials → should display error

2. **Student Sign Up**
   - Valid data → should create account and navigate to career selection  
   - Missing/invalid data → should alert error

3. **College Sign Up**
   - Valid college info → should add to Firestore  
   - Missing fields → should alert error

4. **Career Selection**
   - Selecting Engineering/Management → stores correct career in localStorage

5. **Location Selection**
   - Selecting India/Abroad → stores correct location in localStorage

6. **College List**
   - Correct colleges displayed based on location  
   - Selecting a college → stores collegeId in localStorage

7. **College Registration**
   - Valid inputs → saves to Firestore, navigates to aptitude test  
   - Invalid/missing inputs → alerts error

8. **Student Details**
   - Displays correct student info fetched from Firestore

9. **Aptitude Test**
   - Correct answer → score = 1  
   - Incorrect answer → score = 0

10. **Test Completion**
    - Displays correct score from localStorage
