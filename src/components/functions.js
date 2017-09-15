export const fetchDataRemote = function(callback) {
  console.log("FETCH FIRED");
    // e.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      callback(data);
      console.log("FETCH FINISHED");
      return data
    })
  }
