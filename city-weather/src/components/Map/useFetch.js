export const useFetch = () => {
  const dataApi = async (key, url, city) => {
    const partialUrl = `${url}?key=${key}&days=3&dt&q=${city}`;
    const response = await fetch(partialUrl);
    if (response.status === 400) {
      return Promise.resolve("error");
    }
    return response.json();
  };

  const fetchData = async (cities) => {
    const API = process.env.REACT_APP_API_KEY;
    const URL = process.env.REACT_APP_API_URL;
    const promises = cities.map(async ({ city, image }) => {
      const data = await dataApi(API, URL, city);

      if (!image) {
        image = data?.current?.condition?.icon;
      }
      return { dataApi: data, img: image };
    });

    return Promise.all(promises);
  };

  return { fetchData };
};
