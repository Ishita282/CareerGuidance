// auth.js
import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { logAction } from './logger.js';

export async function studentSignUp(email, password, profile = {}) {
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await logAction({ level: 'info', uid: cred.user.uid, action: 'student_signup', meta: { email } });
    return cred.user;
  } catch (err) {
    await logAction({ level: 'error', action: 'student_signup_failed', meta: { email, error: String(err) }});
    throw err;
  }
}

export async function studentLogin(email, password) {
  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    await logAction({ level: 'info', uid: cred.user.uid, action: 'student_login', meta: { email } });
    return cred.user;
  } catch (err) {
    await logAction({ level: 'error', action: 'student_login_failed', meta: { email, error: String(err) }});
    throw err;
  }
}

export async function logout() {
  try {
    await signOut(auth);
    await logAction({ level:'info', action:'logout' });
  } catch (err) {
    await logAction({ level:'error', action:'logout_failed', meta:{ error: String(err) }});
    throw err;
  }
}
