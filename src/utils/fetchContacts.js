export const fetchContacts = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json"
  );

  const data = await response.json();
  return data;
};
