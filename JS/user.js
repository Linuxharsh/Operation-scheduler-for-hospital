import { db } from "./firebase-config.js";
import { collection, getDocs } 
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

window.viewDoctors = async function () {
  const snapshot = await getDocs(collection(db, "doctors"));
  snapshot.forEach(doc => {
    doctorList.innerHTML += `<li>${doc.data().name} (${doc.data().specialization})</li>`;
  });
};

window.viewSurgeries = async function () {
  const snapshot = await getDocs(collection(db, "operations"));
  snapshot.forEach(doc => {
    surgeryList.innerHTML += `<li>${doc.data().date} - OT ${doc.data().otNumber}</li>`;
  });
};
