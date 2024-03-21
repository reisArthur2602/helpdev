export const getDateNow = () => {
  const dataAtual = new Date();
  const day = String(dataAtual.getDate()).padStart(2, '0');
  const month = String(dataAtual.getMonth() + 1).padStart(2, '0');
  const year = dataAtual.getFullYear();
  return `${day}/${month}/${year}`;
};

