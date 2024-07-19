const DBName = "GlosDatabase";
const DBVersion = 1;
let glosDB;
// create database if it doesnt exist
export function initializeDB() {
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
    console.log('create DB')
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
        recentItem.className = "page_list--item w-[30%]";
        recentItem.textContent = cursor.value.word;
        list.insertAdjacentElement("afterbegin", recentItem);
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
          button.children[0].checked = false;
          button.children[1]?.children[0]?.classList.add("fill-none");
          let removeFill = button.children[1]?.children[0]?.classList.remove(
            "fill-[#B81E53]",
            "dark:fill-[#CF688C]"
          );
          cursor.continue();
          return removeFill;
        } else {
          button.children[0].checked = true;
          button.children[1]?.children[0]?.classList.remove("fill-none");
          let addFill = button.children[1]?.children[0]?.classList.add(
            "dark:fill-[#CF688C]",
            "fill-[#B81E53]"
          );
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
    console.error("error opening DB" + e.target.error);
  };
}
export function clearBookmarks(cta,container) {
  let request = indexedDB.open(DBName);
  request.onsuccess = (e) => {
    let glosDB = request.result;
    let bookmarksStore = glosDB
      .transaction(["Bookmarks"], "readwrite")
      .objectStore("Bookmarks");
    let task = bookmarksStore.clear();
    task.onsuccess = (e) => {
      checkBookmarkListLength(cta, container);
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
    checkBookmarkListLength(cta,container)
    task.onsuccess = (e) => {
      const cursor = e.target.result;
      if (cursor) {
        cta.textContent = "";
        container.classList.remove("hidden");
        const bookmarkItem = document.createElement("li");
        bookmarkItem.className = "page_list--item";
        bookmarkItem.textContent = cursor.value.word;
        list.insertAdjacentElement("afterbegin", bookmarkItem);
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

function checkBookmarkListLength(cta,container){
  let request = indexedDB.open(DBName);
   request.onsuccess = (e) => {
     let glosDB = request.result;
     let bookmarksStore = glosDB
       .transaction(["Bookmarks"], "readonly")
       .objectStore("Bookmarks");
     let bookmarkKeyLength = bookmarksStore.count();
     bookmarkKeyLength.onsuccess = (e) => {
       console.log(e.target.result);
       if (e.target.result === 0) {
         cta.textContent =
           "You have not bookmarked any word yet! Click on the bookmark icon beside a word to bookmark and save for later!";
         container.classList.add("hidden");
       }
     };
     bookmarkKeyLength.onerror = (e) => {
       console.log("cannot retrieve count" + e.target.error);
     };
   };
   request.onerror = (e) => {
     console.error("error opening DB" + e.target.error);
   };
}
// initialize database
initializeDB();
