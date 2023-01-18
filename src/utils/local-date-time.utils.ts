const convertToLocalDateTime = (dateTime: string) => {
  let localDateTime = new Date(dateTime);
  return localDateTime.toLocaleString('sv-SE').toString();
}

export default convertToLocalDateTime;