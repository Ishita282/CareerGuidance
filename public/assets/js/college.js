// college.js
import { db } from './firebase-config.js';
import { collection, getDocs, query, where, orderBy, limit, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

/**
 * Returns an array of colleges matching simple filters.
 * Each college object will include 'id' property.
 * Filters: { location, career, maxTuition, minCgpa }
 */
export async function getCollegesForUser(filters = {}) {
  // For simplicity: fetch all colleges and filter client-side (suitable for moderate dataset)
  // In production, you should use server-side queries with proper indexes.
  const qSnap = await getDocs(collection(db, 'colleges'));
  const list = [];
  qSnap.forEach(docSnap => {
    const d = docSnap.data();
    list.push({ id: docSnap.id, ...d });
  });

  let out = list;

  if (filters.location) {
    const loc = filters.location.toLowerCase();
    out = out.filter(c => (c.location || '').toLowerCase().includes(loc));
  }
  if (filters.maxTuition != null) {
    out = out.filter(c => (c.fees?.tuition ?? Infinity) <= filters.maxTuition);
  }
  if (filters.minCgpa != null) {
    out = out.filter(c => (c.eligibility?.min_cgpa ?? 0) <= filters.minCgpa);
  }

  // basic sort: by tuition ascending
  out.sort((a,b) => (a.fees?.tuition ?? 0) - (b.fees?.tuition ?? 0));
  return out;
}

export async function getCollegeById(id) {
  if (!id) return null;
  const dref = doc(db, 'colleges', id);
  const snap = await getDoc(dref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}
