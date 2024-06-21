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
    console.log("Database created");
  };
  DBOpenRequest.onsuccess = (e) => {
    glosDB = e.target.result;
    console.log(glosDB);
    console.log("Database successfully initialized");
  };
  DBOpenRequest.onerror = (e) => {
    console.error("this happened:");
  };
}

export function saveRecents(data) {
  let request = indexedDB.open(DBName);
  request.onsuccess = () => {
    let glosDB = request.result;
    let recentsStore = glosDB
      .transaction(["Recents"], "readwrite")
      .objectStore("Recents");
    let task = recentsStore.add(data);
    task.onsuccess = (e) => {
      console.log("search saved");
    };
    task.onerror = (e) => {
      console.log("error saving searches");
    };
  };
  request.onerror = () => {
    console.log("error opening DB");
  };
}
export function clearRecents() {
  let request = indexedDB.open(DBName);
  request.onsuccess = () => {
    let glosDB = request.result;
    let recentsStore = glosDB
      .transaction(["Recents"], "readwrite")
      .objectStore("Recents");
    let task = recentsStore.clear();
    task.onsuccess = (e) => {
      console.log("recents cleared");
    };
    task.onerror = (e) => {
      console.log("error clearing recents");
    };
  };
  request.onerror = () => {
    console.log("error opening DB");
  };
}
export function displayRecentsList(list,cta,container) {
  let request = indexedDB.open(DBName);
  list.innerHTML = "";
  request.onsuccess = () => {
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
      console.log("error clearing search history");
    };
  };
  request.onerror = () => {
    console.log("error opening DB");
  };
}
export function saveBookmarks(e) {
  let input = e.target;
  let data = input.parentNode.getAttribute('data-word');
  console.log(data);
  let request = indexedDB.open(DBName);
  request.onsuccess = (e) => {
    let glosDB = request.result;
    let bookmarksStore = glosDB
      .transaction(["Bookmarks"], "readwrite")
      .objectStore("Bookmarks");
    let task = bookmarksStore.add(data);
    task.onsuccess = (e) => {
      console.log(data);
      return input.checked;
    };
    task.onerror = (e) => {
      !input.checked
      console.log("error saving bookmark");
      console.log(e.target.error);
    };
  };
  request.onerror = () => {
    console.log("error opening DB");
  };
}
export function deleteBookmark(e){
 let input = e.target;
 let data = input.parentNode.getAttribute("data-word");
 let request = indexedDB.open(DBName);
 request.onsuccess = (e) => {
   let glosDB = request.result;
   let bookmarksStore = glosDB
     .transaction(["Bookmarks"], "readwrite")
     .objectStore("Bookmarks");
   let task = bookmarksStore.openCursor();
   task.onsuccess = (e) => {
    const cursor = e.target.result
    if(cursor){
      if(cursor.value === data){
        let deleteTask = bookmarksStore.delete(cursor.key)
        deleteTask.onsuccess = ()=>{
          console.log('delete success');
          return !input.checked
        }
        deleteTask.onerror = ()=>{
          console.log('delete fail');
        }
      }
      else{
        console.log('key not found')
      }
      cursor.continue();
    }
   };
   task.onerror = (e) => {
     !input.checked;
     console.log("error saving bookmark");
     console.log(e.target.error);
   };
 };
 request.onerror = () => {
   console.log("error opening DB");
 };
}
export function clearBookmarks() {
  let request = indexedDB.open(DBName);
  request.onsuccess = () => {
    let glosDB = request.result;
    let bookmarksStore = glosDB
      .transaction(["Bookmarks"], "readwrite")
      .objectStore("Bookmarks");
    let task = bookmarksStore.clear();
    task.onsuccess = (e) => {
      console.log("bookmark cleared");
      location.reload()
    };
    task.onerror = (e) => {
      console.log("error clearing bookmark");
    };
  };
  request.onerror = () => {
    console.log("error opening DB");
  };
}
export function displayBookmarksList(list, cta, container) {
  let request = indexedDB.open(DBName);
  list.innerHTML = "";
  request.onsuccess = () => {
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
        bookmarkItem.textContent = cursor.value;
        list.append(bookmarkItem);
        cursor.continue();
      }
    };
    task.onerror = (e) => {
      console.log("error clearing bookmark");
    };
  };
  request.onerror = () => {
    console.log("error opening DB");
  };
}

initializeDB();
