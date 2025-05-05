import { Link } from 'react-router-dom';
import { useTheme } from "./theme-provider";
import { useTranslation } from 'react-i18next';


const TutorialSection = () => {
  const { t } = useTranslation("common"); // Utilisation de useTranslation
  const { theme } = useTheme();

  const tutorials = [
    { title: t('tutorials.onboarding.title'), description: t('tutorials.onboarding.description') },
    { title: t('tutorials.navigation.title'), description: t('tutorials.navigation.description') },
    { title: t('tutorials.search.title'), description: t('tutorials.search.description') },
    { title: t('tutorials.chat.title'), description: t('tutorials.chat.description') },
  ];

  const bgGradient = theme === 'dark'
    ? 'linear-gradient(145deg, #191817 25%, #1c1917 100%)'
    : 'linear-gradient(145deg, #f9f5e1 25%, #f9f5e1 100%)';

  const cardBg = theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#f2f2f2';
  const border = theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #ddd';
  const textColor = theme === 'dark' ? '#fff' : '#111';
  const subTextColor = theme === 'dark' ? 'rgba(255,255,255,0.8)' : '#333';

  return (
    <section
      style={{
        padding: '4rem 2rem',
        background: bgGradient,
        textAlign: 'center',
        transition: 'background 0.3s ease',
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          marginBottom: '3rem',
          fontWeight: '600',
          color: textColor,
        }}
      >
        {t("tutorialSection.title")} {/* Traduction ici */}
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {tutorials.map((tutorial, index) => (
          <div
            key={index}
            style={{
              background: cardBg,
              border,
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: theme === 'dark'
                ? '0 12px 24px rgba(0,0,0,0.3)'
                : '0 8px 16px rgba(0,0,0,0.06)',
              backdropFilter: theme === 'dark' ? 'blur(10px)' : 'none',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = theme === 'dark'
                ? '0 16px 32px rgba(0,0,0,0.5)'
                : '0 12px 24px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = theme === 'dark'
                ? '0 12px 24px rgba(0,0,0,0.3)'
                : '0 8px 16px rgba(0,0,0,0.06)';
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: textColor }}>
              {tutorial.title}
            </h3>
            <p style={{ marginBottom: '1rem', color: subTextColor }}>
              {tutorial.description}
            </p>
          </div>
        ))}
      </div>

      <Link to="/tutorials">
        <button
          style={{
            marginTop: '3rem',
            padding: '0.8rem 1.6rem',
            background: 'darkorange',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            fontWeight: '600',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#e69500';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'darkorange';
          }}
        >
          {t("tutorialSection.exploreAll")} {/* Traduction ici */}
        </button>
      </Link>
    </section>
  );
};

export default TutorialSection;
