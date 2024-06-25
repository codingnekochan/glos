const DBName = "GlosDatabase";
const DBVersion = 1;
let glosDB;
// create database if it doesnt exist
function initializeDB() {
  const DBOpenRequest = indexedDB.open(DBName, DBVersion);
  DBOpenRequest.onupgradeneeded = (e) => {
    glosDB = e.target.result;
    let bookmarksStore = glosDB.createObjectStore("Bookmarks", {
      autoIncrement: true,
    });
    let recentsStore = glosDB.createObjectStore("Recents", {
      autoIncrement: true,
    });
    bookmarksStore.createIndex("word", "word", { unique: true });
    recentsStore.createIndex("word", "word", { unique: true });
  };
  DBOpenRequest.onsuccess = (e) => {
    glosDB = e.target.result;
    console.log("Database successfully initialized");
  };
  DBOpenRequest.onerror = (e) => {
    console.error("this happened:" + e.target.error);
  };
}

export function saveRecents(data) {
  let request = indexedDB.open(DBName);
  request.onsuccess = (e) => {
    let glosDB = request.result;
    let recentsStore = glosDB
      .transaction(["Recents"], "readwrite")
      .objectStore("Recents");
    let task = recentsStore.add(data);
    task.onsuccess = (e) => {
      console.log("search saved");
    };
    task.onerror = (e) => {
      console.error("error saving searches:" + e.target.error);
    };
  };
  request.onerror = (e) => {
    console.error("error opening DB:" + e.target.error);
  };
}
export function clearRecents() {
  let request = indexedDB.open(DBName);
  request.onsuccess = (e) => {
    let glosDB = request.result;
    let recentsStore = glosDB
      .transaction(["Recents"], "readwrite")
      .objectStore("Recents");
    let task = recentsStore.clear();
    task.onsuccess = (e) => {

      console.log("recents cleared");
    };
    task.onerror = (e) => {
      console.error("error clearing recents :" + e.target.error);
    };
  };
  request.onerror = (e) => {
    console.error("error opening DB :" + e.target.error);
  };
}
export function displayRecentsList(list, cta, container) {
  let request = indexedDB.open(DBName);
  list.innerHTML = "";
  request.onsuccess = (e) => {
    let glosDB = request.result;
    let recentsStore = glosDB
      .transaction(["Recents"], "readonly")
      .objectStore("Recents");
    let task = recentsStore.openCursor();
    task.onsuccess = (e) => {
      const cursor = e.target.result;
      if (cursor) {
        cta.textContent = "";
        container.classList.remove("hidden");
        const recentItem = document.createElement("li");
        recentItem.className = "page_list--item";
        recentItem.textContent = cursor.value.word;
        list.append(recentItem);
        cursor.continue();
      }
    };
    task.onerror = (e) => {
      console.error("error clearing search history:" + e.target.error);
    };
  };
  request.onerror = (e) => {
    console.error("error opening DB:" + e.target.error);
  };
}
export function saveBookmarks(e) {
  let input = e.target;
  let bookmarkWord = input.parentNode.getAttribute("data-word");
  const data = { word: bookmarkWord };
  let request = indexedDB.open(DBName);
  request.onsuccess = (e) => {
    let glosDB = request.result;
    let bookmarksStore = glosDB
      .transaction(["Bookmarks"], "readwrite")
      .objectStore("Bookmarks");
    let task = bookmarksStore.add(data);
    task.onsuccess = (e) => {
      console.log("bookmark added");
    };
    task.onerror = (e) => {
      console.error("error saving bookmark" + e.target.error);
    };
  };
  request.onerror = (e) => {
    console.error("error opening DB:" + e.target.error);
  };
}
export function deleteBookmark(e) {
  let input = e.target;
  let bookmarkedWord = input.parentNode.getAttribute("data-word");
  const data = { word: bookmarkedWord };
  let request = indexedDB.open(DBName);
  request.onsuccess = (e) => {
    let glosDB = request.result;
    let bookmarksStore = glosDB
      .transaction(["Bookmarks"], "readwrite")
      .objectStore("Bookmarks");
    let task = bookmarksStore.openCursor();
    task.onsuccess = (e) => {
      const cursor = e.target.result;
      if (cursor) {
        if (cursor.value.word === data.word) {
          let deleteTask = bookmarksStore.delete(cursor.key);
          deleteTask.onsuccess = (e) => {
            console.log("delete success");
          };
          deleteTask.onerror = (e) => {
            console.error("delete fail:" + e.target.error);
          };
        } else {
          console.error("key not found");
        }
        cursor.continue();
      }
    };
    task.onerror = (e) => {
      console.error("Error :" + e.target.error);
    };
  };
  request.onerror = (e) => {
    console.error("error opening DB :" + e.target.error);
  };
}

export function handleBookmarkState(button) {
  let bookmarkedWord = button.getAttribute("data-word");
  const data = { word: bookmarkedWord };
  let request = indexedDB.open(DBName);
  request.onsuccess = (e) => {
    let glosDB = request.result;
    let bookmarksStore = glosDB
      .transaction(["Bookmarks"], "readwrite")
      .objectStore("Bookmarks");
    let task = bookmarksStore.openCursor();
    task.onsuccess = (e) => {
      const cursor = e.target.result;
      if (cursor) {
        if (cursor.value.word !== data.word) {
          let removeFill =
          button.children[1]?.children[0]?.classList.remove("fill-[#CF688C]");
          button.children[0].checked = false;
          button.children[1]?.children[0]?.classList.add("fill-none");
          cursor.continue();
          return removeFill;
        } else {
          button.children[0].checked = true;
          button.children[1]?.children[0]?.classList.remove("fill-none");
          let addFill =
            button.children[1]?.children[0]?.classList.add("fill-[#CF688C]");
          return addFill;
        }
      }
    };
    task.onerror = (e) => {
      console.error("error removing bookmark" + e.target.error);
      return input.checked;
    };
  };
  request.onerror = (e) => {
    console.error("error opening DB") + e.target.error;
  };
}
export function clearBookmarks() {
  let request = indexedDB.open(DBName);
  request.onsuccess = (e) => {
    let glosDB = request.result;
    let bookmarksStore = glosDB
      .transaction(["Bookmarks"], "readwrite")
      .objectStore("Bookmarks");
    let task = bookmarksStore.clear();
    task.onsuccess = (e) => {
      console.log("bookmark cleared");
    };
    task.onerror = (e) => {
      console.error("error clearing bookmark" + e.target.error);
    };
  };
  request.onerror = (e) => {
    console.error("error opening DB" + e.target.error);
  };
}

export function displayBookmarksList(list, cta, container) {
  let request = indexedDB.open(DBName);
  list.innerHTML = "";
  request.onsuccess = (e) => {
    let glosDB = request.result;
    let bookmarksStore = glosDB
      .transaction(["Bookmarks"], "readonly")
      .objectStore("Bookmarks");
    let task = bookmarksStore.openCursor();
    task.onsuccess = (e) => {
      const cursor = e.target.result;
      if (cursor) {
        cta.textContent = "";
        container.classList.remove("hidden");
        const bookmarkItem = document.createElement("li");
        bookmarkItem.className = "page_list--item";
        bookmarkItem.textContent = cursor.value.word;
        list.append(bookmarkItem);
        cursor.continue();
      }
    };
    task.onerror = (e) => {
      console.error("error diplaying bookmark" + e.target.error);
    };
  };
  request.onerror = (e) => {
    console.error("error opening DB" + e.target.error);
  };
}
initializeDB();
