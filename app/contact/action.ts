"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const contact = formData.get("contact")?.toString().trim();
  const inquiryType = formData.get("inquiryType")?.toString().trim();
  const service = formData.get("service")?.toString().trim();
  const venture = formData.get("venture")?.toString().trim();
  const budget = formData.get("budget")?.toString().trim();
  const description = formData.get("description")?.toString().trim();

  if (!name || !contact || !inquiryType || !description) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  const subjectMap: Record<string, string> = {
    "Service Project": `[Colteum] Service Inquiry${service ? ` — ${service}` : ""}`,
    "Partnership / Investment": `[Colteum] Partnership Inquiry${venture ? ` — ${venture}` : ""}`,
    "Press / Speaking": "[Colteum] Press / Speaking Inquiry",
    "Research Inquiry": "[Colteum] Research Inquiry",
    General: "[Colteum] General Inquiry",
  };

  const subject = subjectMap[inquiryType] ?? "[Colteum] New Inquiry";

  const messageBody = [
    `Name: ${name}`,
    `Contact: ${contact}`,
    `Inquiry Type: ${inquiryType}`,
    service ? `Service: ${service}` : "",
    venture ? `Venture: ${venture}` : "",
    budget ? `Budget: ${budget}` : "",
    `\nMessage:\n${description}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const res = await fetch("https://formsubmit.co/ajax/colteumcompany@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email: contact,
        _subject: subject,
        message: messageBody,
        _template: "table",
        _captcha: "false",
      }),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    return {
      status: "success",
      message: "Message sent — we'll reply within 24 hours, often within 2.",
    };
  } catch {
    return {
      status: "error",
      message:
        "Something went wrong. Please email us directly at hello@colteumgroup.com or message on WhatsApp.",
    };
  }
}
