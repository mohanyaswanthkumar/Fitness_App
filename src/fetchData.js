export const excerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6e73dcbfccmshbf5a7a8ace07b5ap1b631bjsn9beb44b11d49',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };