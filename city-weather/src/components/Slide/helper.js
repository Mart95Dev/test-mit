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

export const ellipse = (str) => {
  const maxLength = 20;
  let newStr = str.slice(0, maxLength);

  if (str.length > maxLength) {
    newStr += "...";
  }
  return newStr;
};
