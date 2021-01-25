export const fetchData = async () => {
    try {
      const response = await fetch("https://api.holidu.com/rest/v6/search/offers?searchTerm=Mallorca,%20Spanien");
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };