const leadForm = document.querySelector("#lead-form");
const formNote = document.querySelector("#form-note");

if (leadForm && formNote) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(leadForm);
    const nome = String(formData.get("nome") || "").trim();
    const empresa = String(formData.get("empresa") || "").trim();

    formNote.textContent =
      `Diagnóstico pronto para integração. Captura simulada para ${nome || "o lead"} da empresa ${empresa || "informada"}. ` +
      "Na próxima etapa, conecte este formulário ao seu CRM, WhatsApp ou automação.";
    formNote.classList.add("form-note--success");

    leadForm.reset();
  });
}
