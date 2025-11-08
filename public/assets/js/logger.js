// logger.js
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { db } from './firebase-config.js';

export async function logAction({ level = 'info', uid = null, action = '', meta = {} } = {}) {
  try {
    await addDoc(collection(db, 'logs'), {
      level, uid, action, meta, ts: serverTimestamp()
    });
    // also console for local debugging
    if (console && console.log) console.log(`[log:${level}] ${action}`, meta);
  } catch (err) {
    console.error('logger error', err);
  }
}
