import axios from "axios";

export const fetchCars = async () => {
  try {
    const response = await axios.get(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
      {
        headers: {
          "X-RapidAPI-Key": "be6550aed0msh66e27ca17530768p173aafjsn7abed807c9d9",
          "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
        },
      }
    );
    return response.data;
  }catch(error){
        console.log('error', error)
  }
};
