import Divider from "../components/Divider";
import PolicyTextComponent from "../components/PolicyTextComponent";
import { useAppContext } from "../context/context";
import { Helmet } from "react-helmet";

import "../pages/Policy.css";

export default function Policy() {
  const { lang } = useAppContext();

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Here you can read out cookies policy"
        />
        <title>BiQ pH - Cookies policy</title>
      </Helmet>
      <section className="policy">
        <p className="policy-head">
          {lang === "ENG" ? "Cookie Policy" : "Polityka plików cookie"}
        </p>
        <p className="policy-text">
          {lang === "ENG"
            ? "Effective Date: [May 12, 2023]"
            : "Data wejścia w życie: [12 maja 2023]"}
          <br />
          {lang === "ENG"
            ? "This Cookie Policy explains how cookies and similar tracking technologies are used on our website. It applies to all visitors, users, and customers of our website. By accessing or using our website, you consent to cookies as described in this Cookie Policy."
            : "Niniejsza Polityka plików cookie wyjaśnia, w jaki sposób wykorzystujemy pliki cookie i podobne technologie śledzenia na naszej stronie internetowej. Dotyczy to wszystkich odwiedzających, użytkowników i klientów naszej strony internetowej. Korzystając z naszej strony internetowej, wyrażasz zgodę na korzystanie z plików cookie zgodnie z opisem zawartym w niniejszej Polityce plików cookie."}
        </p>
        <Divider margin="20px 0" />
        <p className="policy-head">
          {lang === "ENG" ? "What Are Cookies?" : "Czym są pliki cookie?"}
        </p>
        <p className="policy-text">
          {lang === "ENG"
            ? "Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and enhance the user experience. Cookies may store information about your browsing preferences and activities on the website."
            : "Pliki cookie to małe pliki tekstowe umieszczane na Twoim komputerze lub urządzeniu mobilnym podczas odwiedzania strony internetowej. Są one szeroko stosowane w celu zapewnienia efektywniejszego działania stron internetowych i poprawienia doświadczenia użytkownika. Pliki cookie mogą przechowywać informacje o preferencjach przeglądania i aktywności na stronie internetowej."}
        </p>
        <Divider margin="20px 0" />
        <p className="policy-head">
          {lang === "ENG"
            ? "Types of Cookies We Use"
            : "Rodzaje plików cookie, których używamy"}
        </p>
        <PolicyTextComponent
          subhead={
            lang === "ENG"
              ? "1.1 Essential Cookies"
              : "1.1 Pliki cookie niezbędne"
          }
        >
          {lang === "ENG"
            ? "These cookies are necessary for the website to function correctly. They enable essential functions such as page navigation, access to secure areas, and adding items to the shopping cart. These cookies do not collect personal information."
            : "Te pliki cookie są niezbędne do prawidłowego funkcjonowania strony internetowej. Umożliwiają podstawowe funkcje, takie jak nawigacja po stronach, dostęp do obszarów chronionych i dodawanie produktów do koszyka zakupowego. Pliki cookie te nie gromadzą informacji osobistych."}
        </PolicyTextComponent>
        <PolicyTextComponent
          subhead={
            lang === "ENG"
              ? "1.2 Analytical Cookies"
              : "1.2 Pliki cookie analityczne"
          }
        >
          {lang === "ENG"
            ? "We use analytical cookies to collect information about how visitors use our website. This helps us analyze the number of visitors, pages visited, and the traffic source. The data collected improves the website's performance and enhances the user experience."
            : "Używamy plików cookie analitycznych do zbierania informacji o tym, w jaki sposób odwiedzający korzystają z naszej strony internetowej. Pomaga nam to analizować dane, takie jak liczba odwiedzających, odwiedzane strony i źródło ruchu. Zebrane informacje są wykorzystywane do poprawy działania strony internetowej i poprawy doświadczenia użytkownika."}
        </PolicyTextComponent>
        <PolicyTextComponent
          subhead={
            lang === "ENG"
              ? "1.3 Marketing Cookies"
              : "1.3 Pliki cookie marketingowe"
          }
        >
          {lang === "ENG"
            ? "Marketing cookies are used to track visitors across websites. The intention is to display relevant and engaging ads to individual users. In addition, these cookies may collect information about your browsing habits and interests for targeted advertising."
            : "Pliki cookie marketingowe służą do śledzenia użytkowników na różnych stronach internetowych. Celem jest wyświetlanie reklam odpowiednich i interesujących dla poszczególnych użytkowników. Pliki cookie te mogą gromadzić informacje o nawykach przeglądania i zainteresowaniach w celu dostarczenia reklam ukierunkowanych."}
        </PolicyTextComponent>
        <Divider margin="20px 0" />
        <p className="policy-head">
          {lang === "ENG"
            ? "Third-Party Cookies"
            : "Pliki cookie stron trzecich"}
        </p>
        <p className="policy-text">
          {lang === "ENG"
            ? "We may allow third-party service providers to place cookies on our website to provide analytics, advertising, and other services. These third-party cookies are subject to the respective privacy policies of the providers."
            : "Możemy zezwalać dostawcom usług stron trzecich na umieszczanie plików cookie na naszej stronie internetowej w celu dostarczenia nam analiz, reklam i innych usług. Pliki cookie stron trzecich są objęte odpowiednimi politykami prywatności dostawców."}
        </p>
        <Divider margin="20px 0" />
        <p className="policy-head">
          {lang === "ENG" ? "Cookie Management" : "Zarządzanie plikami cookie"}
        </p>
        <p className="policy-text">
          {lang === "ENG"
            ? "You can control and manage cookies through your browser settings. Most web browsers allow you to accept or reject cookies, delete existing cookies, or set preferences for certain websites. Please note that disabling or deleting cookies may affect our website's functionality and user experience."
            : "Możesz kontrolować i zarządzać plikami cookie za pomocą ustawień przeglądarki. Większość przeglądarek internetowych umożliwia akceptację lub odrzucenie plików cookie, usuwanie istniejących plików cookie lub ustawianie preferencji dla określonych stron internetowych. Należy jednak pamiętać, że wyłączenie lub usunięcie plików cookie może wpłynąć na funkcjonalność i doświadczenie użytkownika na naszej stronie internetowej."}
        </p>
        <Divider margin="20px 0" />
        <p className="policy-head">
          {lang === "ENG"
            ? "Changes to this Cookie Policy"
            : "Zmiany w polityce plików cookie"}
        </p>
        <p className="policy-text">
          {lang === "ENG"
            ? "We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. Therefore, please review this page periodically for any updates. Your continued use of our website after any modifications to this Cookie Policy will constitute your acknowledgment of the changes and your consent to abide by the updated policy."
            : "Możemy regularnie aktualizować niniejszą Politykę plików cookie w celu odzwierciedlenia zmian w naszych praktykach lub wymogach prawnych. Zachęcamy do okresowego sprawdzania tej strony w poszukiwaniu aktualizacji. Korzystanie z naszej strony internetowej po dokonaniu jakichkolwiek modyfikacji w Polityce plików cookie stanowi akceptację tych zmian oraz zgodę na przestrzeganie zaktualizowanej polityki."}
        </p>
        <Divider margin="20px 0" />
        <p className="policy-head">
          {lang === "ENG" ? "Contact Us" : "Kontakt "}
        </p>
        <p className="policy-text">
          {lang === "ENG"
            ? "If you have any questions, concerns, or requests regarding this Cookie Policy, don't hesitate to contact us at [contact information]. By using our website, you acknowledge that you have read, understood, and agreed to the terms of this Cookie Policy."
            : "Jeśli masz jakiekolwiek pytania, wątpliwości lub prośby dotyczące tej Polityki plików cookie, skontaktuj się z nami pod adresem [informacje kontaktowe]. Korzystając z naszej strony internetowej, potwierdzasz, że przeczytałeś, zrozumiałeś i zgadzasz się na postanowienia niniejszej Polityki plików cookie."}
        </p>
      </section>
    </>
  );
}
