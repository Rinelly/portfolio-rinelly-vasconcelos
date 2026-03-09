import "./Contact.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_wleg5fh", "template_zlu117l", form.current, {
        publicKey: "NvbE7BsqD8CiWf974",
      })
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        form.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Erro ao enviar mensagem. Verifique o console.");
      });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contato</h2>

      <form ref={form} onSubmit={sendEmail} className="contact__form">
        <input type="text" name="from_name" placeholder="Nome" required />

        <input type="email" name="from_email" placeholder="E-mail" required />

        <input type="text" name="subject" placeholder="Assunto" />

        <textarea
          name="message"
          placeholder="Digite sua mensagem"
          rows={5}
          required
        />

        <button type="submit">Enviar mensagem</button>
      </form>
    </section>
  );
}

export default Contact;
