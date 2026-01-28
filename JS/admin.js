import { db } from "./firebase-config.js";
import { collection, addDoc, getDocs } 
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { logAction } from "./logger.js";

window.addDoctor = async function () {
  await addDoc(collection(db, "doctors"), {
    name: docName.value,
    specialization: specialization.value
  });
  logAction("Doctor Added", "Admin");
  alert("Doctor Added");
};

window.scheduleOperation = async function () {
  await addDoc(collection(db, "operations"), {
    date: opDate.value,
    time: opTime.value,
    otNumber: otNumber.value,
    anesthesia: anesthesia.value,
    surgeon: surgeon.value,
    nurse: nurse.value,
    remarks: remarks.value
  });
  logAction("Operation Scheduled", "Admin");
  alert("Operation Scheduled");
};

window.viewSchedules = async function () {
  const snapshot = await getDocs(collection(db, "operations"));
  snapshot.forEach(doc => {
    scheduleList.innerHTML += `<li>${doc.data().date} - OT ${doc.data().otNumber}</li>`;
  });
};
