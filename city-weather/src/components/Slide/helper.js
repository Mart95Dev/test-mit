export const translateDay = (d) => {
  const date = new Date(d); // crée un nouvel objet Date à partir du timestamp, en multipliant par 1000 pour convertir en millisecondes

  const options = {
    weekday: "long", // affiche le nom complet du jour de la semaine (par exemple, "lundi")
  };

  const formattedDate = date.toLocaleDateString("fr-FR", options); // utilise la méthode toLocaleDateString() de l'objet Date pour formater la date en utilisant les options spécifiées
  return formattedDate;
};

export const translateDayAndDate = (d) => {
  const date = new Date(d); // crée un nouvel objet Date à partir du timestamp, en multipliant par 1000 pour convertir en millisecondes

  const options = {
    weekday: "long", // affiche le nom complet du jour de la semaine (par exemple, "lundi")
    day: "2-digit", // affiche le jour avec deux chiffres (par exemple, "01" pour le premier jour du mois)
    month: "2-digit", // affiche le mois avec deux chiffres (par exemple, "02" pour février)
  };

  const formattedDate = date.toLocaleDateString("fr-FR", options); // utilise la méthode toLocaleDateString() de l'objet Date pour formater la date en utilisant les options spécifiées
  return formattedDate;
};

////BEFORE CHANGE API/////
// export const translateDate = (time) => {
//   const date = new Date(time * 1000); // crée un nouvel objet Date à partir du timestamp, en multipliant par 1000 pour convertir en millisecondes

//   const options = {
//     weekday: "long", // affiche le nom complet du jour de la semaine (par exemple, "lundi")
//     day: "2-digit", // affiche le jour avec deux chiffres (par exemple, "01" pour le premier jour du mois)
//     month: "2-digit", // affiche le mois avec deux chiffres (par exemple, "02" pour février)
//     year: "numeric", // affiche l'année avec les quatre chiffres (par exemple, "2023")
//   };

//   const formattedDate = date.toLocaleDateString("fr-FR", options); // utilise la méthode toLocaleDateString() de l'objet Date pour formater la date en utilisant les options spécifiées
//   console.log(formattedDate); // affiche la date formatée dans la console
//   return formattedDate;
// };

// export const cityWeather = (zone) => {
//   const timeZone = zone; // la chaîne de caractères à traiter
//   const city = timeZone.split("/"); // divise la chaîne en deux parties et récupère la deuxième partie (l'élément d'index 1)
//   console.log(city[1]); // affiche "Chicago" dans la console
// };
