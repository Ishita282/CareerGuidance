// aptitude.js
import { db } from './firebase-config.js';
import { doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { logAction } from './logger.js';

// Simple set of MCQs to follow spec (verbal, quantitative, gk)
const QUESTIONS = [
  { id:'q1', text:'2 + 3 = ?', choices:['4','5','6','7'], answer:1, section:'quant' },
  { id:'q2', text:'Choose the synonym of "abundant".', choices:['scarce','plentiful','rare','empty'], answer:1, section:'verbal' },
  { id:'q3', text:'Who is known as the Father of Computers?', choices:['Alan Turing','Charles Babbage','Tim Berners-Lee','Ada Lovelace'], answer:1, section:'gk' }
];

/**
 * startTest(containerEl, submitBtn)
 * Renders questions into containerEl and wires submitBtn to save result.
 */
export function startTest(containerEl, submitBtn) {
  containerEl.innerHTML = '';
  const form = document.createElement('form');
  form.id = 'aptitude-form';
  QUESTIONS.forEach((q, idx) => {
    const qDiv = document.createElement('div');
    qDiv.className = 'question';
    const h = document.createElement('p');
    h.textContent = `${idx+1}. ${q.text}`;
    qDiv.appendChild(h);
    q.choices.forEach((c, i) => {
      const label = document.createElement('label');
      label.style.display = 'block';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = q.id;
      input.value = i;
      label.appendChild(input);
      label.append(' ' + c);
      qDiv.appendChild(label);
    });
    form.appendChild(qDiv);
  });
  containerEl.appendChild(form);

  submitBtn.addEventListener('click', async () => {
    submitBtn.disabled = true;
    const formEl = document.getElementById('aptitude-form');
    let score = 0;
    const answers = {};
    QUESTIONS.forEach(q => {
      const selected = formEl[q.id].value;
      answers[q.id] = selected ?? null;
      if (String(q.answer) === String(selected)) score++;
    });
    const result = { score, total: QUESTIONS.length, answers, createdAt: serverTimestamp() };
    try {
      // use a random id (could be auto-id instead)
      const id = crypto.randomUUID();
      await setDoc(doc(db, 'aptitude_results', id), result);
      await logAction({ action:'aptitude_submitted', meta: { score, total: QUESTIONS.length }});
      // redirect with score
      location.href = `test-complete.html?resultId=${id}&score=${score}`;
    } catch (err) {
      console.error(err);
      alert('Failed to submit test. Try again.');
      submitBtn.disabled = false;
    }
  }, { once: true });
}
