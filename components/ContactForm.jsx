"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Имя: ${formData.name}\nНомер телефона: ${formData.phone}\nКомментарий по заказу: ${formData.comment}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=77788840306&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="order-section" className="contact-block">
      <h2>Отправить заявку</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Имя
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Введите ваше Имя" />
        </label>
        <label>
          Номер телефона
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Введите ваш Номер телефона" />
        </label>
        <label>
          Комментарий по заказу
          <textarea name="comment" value={formData.comment} onChange={handleChange} placeholder="Введите ваш Комментарий по заказу"></textarea>
        </label>
        <button type="submit">Оформить заказ</button>
      </form>
      <p>
        После отправки заявки в течение полу часа с вами свяжется менеджер для уточнения деталей заказа.
      </p>
    </section>
  );
};

export default ContactForm;
