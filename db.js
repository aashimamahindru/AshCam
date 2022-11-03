//connect to database
let db;
let openRequest =window.indexedDB.open('myDatabase');
let a = 123;
openRequest.addEventListener('success', () => {
    console.log('db connected');
    db = openRequest.result;
})

openRequest.addEventListener("upgradeneeded", () => {
    console.log("db upgraded OR initalised db ");
    db = openRequest.result;

    db.createObjectStore('video', { keyPath: "id" });
    db.createObjectStore("image", { keyPath: "id" });
});

openRequest.addEventListener("error", () => {
    console.log("db error");
});
