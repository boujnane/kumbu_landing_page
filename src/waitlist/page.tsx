import { useState } from "react";

export default function WaitingList() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfvsIaboG5I3l_2TXwwhqAoEaOuDhmstD-QPJZMNR5moVAylg/formResponse";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const formData = new FormData();
    formData.append("entry.648392626", email);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Erreur d'envoi:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-6">
      <div className="bg-card shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-primary mb-4">Rejoignez la Waiting List</h1>
        <p className="text-muted-foreground mb-6">
          Inscrivez-vous pour être informé dès le lancement !
        </p>

        {submitted ? (
          <p className="text-green-500 font-semibold">Merci ! Vous êtes bien inscrit(e) ✅</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md bg-input text-foreground focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-semibold hover:opacity-90 transition"
            >
              S'inscrire 🚀
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
