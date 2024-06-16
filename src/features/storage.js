/* This module handles the storage of bookmarks and search history, 
the storage being used is the IndexedDB storage, accessible through
 the IndexedDB API */
const DBName = "Glos DataBase";
const DBVersion = 1;
let glosDB;
let bookmarksStore;
let recentsStore;
const word = {
  word: "Resist",
};
export function createDB() {
  const glosDBOpenRequest = window.indexedDB.open(DBName, DBVersion);
  glosDB = glosDBOpenRequest.result;
  glosDBOpenRequest.onsuccess = (e) => {
    console.log("Database and object stores exists");
  };

  glosDBOpenRequest.onupgradeneeded = (e) => {
    bookmarksStore = glosDB.createObjectStore("Bookmarks", {
      autoIncrement: true,
    });
    recentsStore = glosDB.createObjectStore("Recents", { autoIncrement: true });
    bookmarksStore.createIndex("word", "word", { unique: false });
    recentsStore.createIndex("word", "word", { unique: false });
    console.log("Database created or upgraded");
  };

  glosDBOpenRequest.onerror = (e) => {
    console.log(e.target.error);
  };
  return glosDB;
}

// function getTransaction(e, storeName, mode) {
//   glosDB = glosDBOpenRequest.result;
//   const tx = glosDB.transaction(storeName, mode);
//   return tx.objectStore(storeName);
// }
// function addData(storeName, data, mode) {
//   getTransaction(storeName, mode);
//   storeName.add(data);
//   console.log("data added");
// }

// function clearData(storeName) {}

// function displayData(store, data) {}

// addData("Bookmarks", word, "readwrite");
