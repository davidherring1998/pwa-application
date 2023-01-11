import { openDB } from 'idb';

const initdb = async () =>
  openDB('content', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('content')) {
        console.log('content database already exists');
        return;
      }
      db.createObjectStore('content', { keyPath: 'id', autoIncrement: true });
      console.log('content database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('content added to the database');
  const contentDb = await openDB('content', 1);
  const text = contentDb.transaction('content', 'readwrite');
  const store = text.objectStore('content');
  const request = store.add({content: content});

  const result = await request;
  console.log('content saved to database', result);
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const contentDb = await openDB('content', 1);
  const text = contentDb.transaction('content', 'readwrite');
  const store = text.objectStore('content');
  const request = store.getAll();

  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
