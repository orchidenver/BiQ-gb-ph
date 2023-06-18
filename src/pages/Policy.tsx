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
          content="Here you can read out privacy policy"
        />
        <title>BiQ pH - Privacy policy</title>
      </Helmet>
      <section className="policy">
        <p className="policy-head">
          {lang === "ENG" ? "Privacy Policy" : "Polityka prywatności"}
        </p>
        <p className="policy-text">
          {lang == "ENG"
            ? "Effective Date: [May 12, 2023]."
            : "Data wejścia w życie: [12 maja 2023]"}
          <br />
          {lang === "ENG"
            ? "This Privacy Policy describes how we collect, use, and disclose personal information when you visit our website and purchase our water products. It applies to all visitors, users, and customers of our website. By accessing or using our website, you agree to collect and use your personal information as described in this Privacy Policy."
            : "Niniejsza Polityka prywatności opisuje, w jaki sposób gromadzimy, używamy i ujawniamy dane osobowe podczas odwiedzania naszej strony internetowej i dokonywania zakupu produktów wodnych. Dotyczy to wszystkich odwiedzających, użytkowników i klientów naszej strony internetowej. Korzystając z naszej strony internetowej, zgadzasz się na gromadzenie i wykorzystywanie Twoich danych osobowych zgodnie z opisanymi w niniejszej Polityce prywatności zasadami."}
        </p>
        <Divider margin="20px 0" />
        <p className="policy-head">
          {lang === "ENG" ? "Privacy Policy" : "Polityka prywatności"}
        </p>
        <PolicyTextComponent
          subhead={
            lang === "ENG" ? "1.1 Personal Information" : "1.1 Dane osobowe"
          }
        >
          {lang === "ENG"
            ? "We may collect personal information such as your name, email address, phone number, billing and shipping address, and payment information when you place an order on our website. This information is necessary for us to process and fulfill your order."
            : "Możemy zbierać dane osobowe, takie jak Twoje imię, adres e-mail, numer telefonu, adres do faktur i dostawy oraz informacje dotyczące płatności podczas składania zamówienia na naszej stronie internetowej. Te informacje są niezbędne do przetwarzania i realizacji Twojego zamówienia."}
        </PolicyTextComponent>
        <PolicyTextComponent
          subhead={
            lang === "ENG"
              ? "1.2 Usage Information"
              : "1.2 Informacje o korzystaniu"
          }
        >
          {lang === "ENG"
            ? "We may also collect non-personal information about your visit to our website, including your IP address, browser type, operating system, referral source, and pages visited. This information is collected to analyze trends, administer the website, track users' movements, and gather demographic information for aggregate use."
            : "Możemy również zbierać informacje nieosobiste dotyczące Twojej wizyty na naszej stronie internetowej, w tym adres IP, typ przeglądarki, system operacyjny, źródło skierowania i odwiedzane strony. Informacje te są gromadzone w celu analizy trendów, administrowania stroną internetową, śledzenia ruchu użytkowników i gromadzenia informacji demograficznych w celach ogólnych."}
        </PolicyTextComponent>
        <Divider margin="20px 0" />
        <p className="policy-head">
          {lang === "ENG" ? "Use of information" : "Wykorzystanie danych"}
        </p>
        <PolicyTextComponent
          subhead={
            lang === "ENG"
              ? "2.1 Order Processing"
              : "2.1 Przetwarzanie zamówień"
          }
        >
          {lang === "ENG"
            ? "We use the personal information provided by you to process and fulfill your orders, communicate with you about your order status, and provide customer support."
            : "Wykorzystujemy dostarczone przez Ciebie dane osobowe do przetwarzania i realizacji zamówień, komunikowania się z Tobą w sprawie statusu zamówienia oraz udzielania wsparcia dla klientów."}
        </PolicyTextComponent>
        <PolicyTextComponent
          subhead={
            lang === "ENG"
              ? "2.2 Marketing Communication"
              : "2.2 Komunikacja marketingowa"
          }
        >
          {lang === "ENG"
            ? "We may use your email address to send you promotional emails about our products, special offers, and updates with your consent. You can opt out of receiving these emails at any time by following the unsubscribe instructions provided in the email or contacting us directly."
            : "Z Twoją zgodą możemy używać Twojego adresu e-mail do wysyłania Ci informacji promocyjnych o naszych produktach, specjalnych ofertach i aktualizacjach. Możesz w dowolnym momencie zrezygnować z otrzymywania tych wiadomości, postępując zgodnie z instrukcjami do wypisania się zawartymi w wiadomości e-mail lub skontaktować się z nami bezpośrednio."}
        </PolicyTextComponent>
        <PolicyTextComponent
          subhead={
            lang === "ENG"
              ? "2.3 Website Improvement"
              : "2.3 Udoskonalanie strony internetowej"
          }
        >
          {lang === "ENG"
            ? "We may use the usage information collected to improve our website's functionality, troubleshoot technical issues, and enhance the overall user experience."
            : "Możemy wykorzystać gromadzone informacje o korzystaniu w celu ulepszania funkcjonalności naszej strony internetowej, rozwiązywania problemów technicznych i poprawy ogólnego doświadczenia użytkownika."}
        </PolicyTextComponent>
        <Divider margin="20px 0" />
        <p className="policy-head">
          {lang === "ENG"
            ? "Data Sharing and Disclosure"
            : "Udostępnianie i ujawnianie danych"}
        </p>
        <PolicyTextComponent
          subhead={
            lang === "ENG" ? "3.1 Service Providers" : "3.1 Dostawcy usług"
          }
        >
          {lang === "ENG"
            ? "We may share your personal information with trusted third-party service providers who assist us in operating our website, processing payments, and delivering products to you. These service providers have access to your personal information only to perform their tasks on our behalf and must maintain confidentiality."
            : "Możemy udostępniać Twoje dane osobowe zaufanym dostawcom usług, którzy pomagają nam w obsłudze naszej strony internetowej, przetwarzaniu płatności i dostarczaniu produktów. Dostawcy ci mają dostęp do Twoich danych osobowych jedynie w celu wykonywania swoich zadań w naszym imieniu i są zobowiązani do zachowania ich poufności."}
        </PolicyTextComponent>
        <PolicyTextComponent
          subhead={
            lang === "ENG"
              ? "3.2 Legal Compliance"
              : "3.2 Zgodność z przepisami prawymi"
          }
        >
          {lang === "ENG"
            ? "We may disclose your personal information if required by law or if we believe such action is necessary to comply with a legal obligation, protect our rights, or investigate potential violations of our Terms of Service."
            : "Możemy ujawnić Twoje dane osobowe, jeśli jest to wymagane przez prawo lub jeśli uważamy, że taka działanie jest konieczne do spełnienia obowiązku prawego, ochrony naszych praw lub dochodzenia potencjalnych naruszeń naszych Warunków korzystania z usługi."}
        </PolicyTextComponent>
        <Divider margin="20px 0" />
        <p className="policy-head">
          {lang === "ENG" ? "Data Security" : "Bezpieczeństwo danych"}
        </p>
        <p className="policy-text">
          {lang === "ENG"
            ? "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
            : "Wdrażamy odpowiednie środki bezpieczeństwa w celu ochrony Twoich danych osobowych przed nieuprawnionym dostępem, zmianą, ujawnieniem lub zniszczeniem. Jednak żaden sposób przesyłania danych przez internet ani przechowywania ich elektronicznie nie jest w 100% bezpieczny, dlatego nie możemy zagwarantować absolutnego bezpieczeństwa."}
        </p>
        <Divider margin="20px 0" />
        <p className="policy-head">
          {lang === "ENG" ? "Children's Privacy" : "Ochrona prywatności dzieci"}
        </p>
        <p className="policy-text">
          {lang === "ENG"
            ? "Our website is not intended for individuals under the age of 13. We do not knowingly collect personal information from children. However, if you are a parent or guardian and believe your child has provided us with personal information, don't hesitate to contact us, and we will promptly delete that information."
            : "Nasza strona internetowa nie jest przeznaczona dla osób poniżej 13. roku życia. Nie gromadzimy świadomie danych osobowych dzieci. Jeśli jesteś rodzicem lub opiekunem i uważasz, że Twoje dziecko przekazało nam dane osobowe, skontaktuj się z nami, a my natychmiast usuniemy te informacje."}
        </p>
        <Divider margin="20px 0" />
        <p className="policy-head">
          {lang === "ENG"
            ? "Changes to this Privacy Policy"
            : "Zmiany w Polityce prywatności"}
        </p>
        <p className="policy-text">
          {lang === "ENG"
            ? "We may update this Privacy Policy occasionally to reflect changes in our practices or legal requirements. Therefore, please review this page periodically for any updates. Your continued use of our website after any modifications to this Privacy Policy will constitute your acknowledgment of the changes and your consent to abide by the updated policy."
            : "Możemy regularnie aktualizować niniejszą Politykę prywatności w celu uwzględnienia zmian w naszych praktykach lub wymogach prawnych. Zachęcamy do regularnego przeglądania tej strony w celu zapoznania się z ewentualnymi zmianami. Korzystanie z naszej strony internetowej po wprowadzeniu jakichkolwiek zmian w Polityce prywatności oznacza akceptację tych zmian i wyrażenie zgody na ich przestrzeganie."}
        </p>
        <Divider margin="20px 0" />
        <p className="policy-head">
          {lang === "ENG" ? "Contact Us" : "Kontakt"}
        </p>
        <p className="policy-text">
          {lang === "ENG"
            ? "If you have any questions, concerns, or requests regarding this Privacy Policy, don't hesitate to contact us at [contact information]. By using our website, you acknowledge that you have read, understood, and agreed to the terms of this Privacy Policy."
            : "Jeśli masz jakiekolwiek pytania, obawy lub żądania dotyczące tej Polityki prywatności, skontaktuj się z nami pod adresem [informacje kontaktowe]. Korzystając z naszej strony internetowej, potwierdzasz, że zapoznałeś się z treścią tej Polityki prywatności, zrozumiałeś ją i wyraziłeś zgodę na jej postanowienia."}
        </p>
      </section>
    </>
  );
}
