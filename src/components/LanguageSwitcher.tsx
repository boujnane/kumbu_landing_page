import i18n from "i18next";

const languages = [
  { code: "en", label: "English", flag: "https://flagcdn.com/w40/us.png" },
  { code: "fr", label: "Français", flag: "https://flagcdn.com/w40/fr.png" },
];

const LanguageSwitcher = () => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={styles.container}>
      {languages.map((lang) => (
        <img
          key={lang.code}
          src={lang.flag}
          alt={lang.label}
          onClick={() => changeLanguage(lang.code)}
          style={styles.flag}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    cursor: "pointer",
    padding: "8px 12px",
    borderRadius: "8px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
  },
  flag: {
    width: "28px",
    height: "20px", // Uniformiser la taille des drapeaux
    transition: "transform 0.2s ease, opacity 0.2s ease",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default LanguageSwitcher;