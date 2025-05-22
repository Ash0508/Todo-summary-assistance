const admin = require("firebase-admin");
require("dotenv").config();

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  });
  console.log("✅ Firebase Admin Initialized");
} catch (err) {
  console.error("❌ Firebase Admin Init Error:", err);
}

const db = admin.firestore();
module.exports = db;
